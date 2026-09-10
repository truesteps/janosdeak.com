<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'

const HOURS = 72
const WIDTH = 720
const HEIGHT = 140
const PADDING = 14
const RAIN_SCALE = 30

const bump = (hour: number, peak: number, height: number, spread: number) =>
  height * Math.exp(-((hour - peak) ** 2) / (2 * spread ** 2))

const rainAt = (hour: number) => {
  const rain = bump(hour, 31, 2.4, 2.2) + bump(hour, 56, 1.1, 1.5)

  return rain < 0.05 ? 0 : rain
}

const temperatureAt = (hour: number) => {
  const dailyRange = 6 - bump(hour, 34, 3.5, 9)

  return 12 + hour * 0.06 + dailyRange * Math.sin(((hour - 9) / 12) * Math.PI) - 1.2 * rainAt(hour)
}

const hours = Array.from({ length: HOURS + 1 }, (_, hour) => hour)
const rainBars = hours.map((hour) => ({ hour, rain: rainAt(hour) })).filter(({ rain }) => rain > 0)

const temperatures = hours.map(temperatureAt)
const coldest = Math.min(...temperatures)
const warmest = Math.max(...temperatures)

const toX = (hour: number) => (hour / HOURS) * WIDTH
const toY = (temperature: number) =>
  PADDING + (1 - (temperature - coldest) / (warmest - coldest)) * (HEIGHT - 2 * PADDING)

const temperatureLine = temperatures
  .map((temperature, hour) => `${toX(hour).toFixed(1)},${toY(temperature).toFixed(1)}`)
  .join(' ')
const temperatureArea = `0,${HEIGHT} ${temperatureLine} ${WIDTH},${HEIGHT}`

const plot = useTemplateRef('plot')
const activeHour = ref(0)

const readout = computed(() => ({
  time: activeHour.value === 0 ? 'now' : `+${activeHour.value}h`,
  temperature: `${Math.round(temperatureAt(activeHour.value))} °C`,
  rain: `${rainAt(activeHour.value).toFixed(1)} mm`,
}))

const cursor = computed(() => ({
  left: `${(activeHour.value / HOURS) * 100}%`,
  top: `${(toY(temperatureAt(activeHour.value)) / HEIGHT) * 100}%`,
}))

const scrub = (event: PointerEvent) => {
  if (!plot.value) {
    return
  }

  const { left, width } = plot.value.getBoundingClientRect()
  const progress = Math.min(Math.max((event.clientX - left) / width, 0), 1)

  activeHour.value = Math.round(progress * HOURS)
}
</script>

<template>
  <div class="meteogram">
    <div class="meteogram__readout" aria-hidden="true">
      <span>{{ readout.time }}</span>
      <span class="meteogram__temperature">{{ readout.temperature }}</span>
      <span class="meteogram__rain">{{ readout.rain }}</span>
    </div>

    <div
      ref="plot"
      class="meteogram__plot"
      role="img"
      aria-label="Sample meteogram of temperature and rain over the next 72 hours"
      @pointerdown="scrub"
      @pointermove="scrub"
    >
      <svg :viewBox="`0 0 ${WIDTH} ${HEIGHT}`" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient
            id="meteogram-line"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            :y2="HEIGHT"
          >
            <stop offset="0" class="meteogram__stop--warm" />
            <stop offset="1" class="meteogram__stop--cold" />
          </linearGradient>

          <linearGradient id="meteogram-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" class="meteogram__stop--warm" stop-opacity="0.3" />
            <stop offset="1" class="meteogram__stop--warm" stop-opacity="0" />
          </linearGradient>
        </defs>

        <line
          v-for="hour in [24, 48]"
          :key="hour"
          :x1="toX(hour)"
          :x2="toX(hour)"
          y1="0"
          :y2="HEIGHT"
          class="meteogram__day"
          vector-effect="non-scaling-stroke"
        />

        <polygon :points="temperatureArea" fill="url(#meteogram-area)" />

        <rect
          v-for="{ hour, rain } in rainBars"
          :key="hour"
          :x="toX(hour) - 3"
          :y="HEIGHT - rain * RAIN_SCALE"
          width="6"
          :height="rain * RAIN_SCALE"
          class="meteogram__rain-bar"
        />

        <polyline
          :points="temperatureLine"
          fill="none"
          stroke="url(#meteogram-line)"
          stroke-width="2"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke"
        />
      </svg>

      <span class="meteogram__cursor" :style="{ left: cursor.left }" />
      <span class="meteogram__dot" :style="cursor" />
    </div>

    <div class="meteogram__axis" aria-hidden="true">
      <span>now</span>
      <span>+24h</span>
      <span>+48h</span>
      <span>+72h</span>
    </div>

    <p class="meteogram__hint">Sample forecast. Move across the chart to scrub.</p>
  </div>
</template>

<style lang="scss" scoped>
.meteogram {
  --meteogram-warm: #ee7a30;
  --meteogram-cold: #8fd0f7;

  &__readout {
    display: flex;
    gap: 2ch;
    margin-bottom: calc(var(--global-space) / 2);
  }

  &__temperature {
    color: var(--meteogram-warm);
  }

  &__rain {
    color: var(--primary-color);
  }

  &__plot {
    position: relative;
    height: 140px;
    border-bottom: 1px solid var(--secondary-color);
    cursor: crosshair;
    touch-action: pan-y;
    user-select: none;

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &__stop--warm {
    stop-color: var(--meteogram-warm);
  }

  &__stop--cold {
    stop-color: var(--meteogram-cold);
  }

  &__day {
    stroke: var(--secondary-color);
    stroke-dasharray: 4 4;
    opacity: 0.4;
  }

  &__rain-bar {
    fill: var(--primary-color);
    opacity: 0.7;
  }

  &__cursor {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: var(--font-color);
    opacity: 0.4;
    pointer-events: none;
  }

  &__dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--meteogram-warm);
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--meteogram-warm) 30%, transparent);
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  &__axis {
    display: flex;
    justify-content: space-between;
    margin-top: calc(var(--global-space) / 2);
    color: var(--secondary-color);
    font-size: 0.85em;
  }

  &__hint {
    margin: var(--global-space) 0 var(--global-line-height);
    color: var(--secondary-color);
    font-size: 0.85em;
  }
}
</style>
