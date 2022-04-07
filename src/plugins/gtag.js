import { createApp } from 'vue'
import { event } from 'vue-gtag'

const track = binding => () => {
  event('click', {
    event_category: binding.value.category,
    event_label: binding.value.label,
    value: 1,
  })
}

createApp.directive('track', {
  bind(el, binding) {
    const trackFn = track(binding)

    el.addEventListener('click', trackFn)
    el.trackFn = trackFn
  },
  unbind(el) {
    el.removeEventListener('click', el.trackFn)
  },
})
