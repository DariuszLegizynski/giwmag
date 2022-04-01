import { event } from 'vue-gtag'

export const trackButtonClick = (
  handle = 'test handle',
  category = 'test category',
  description = 'test description'
) => {
  event(handle, {
    event_category: category,
    event_label: description,
    value: 1,
  })
}
