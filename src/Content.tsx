import { defineComponent } from 'vue'

const PageContnet = defineComponent({
  name: 'PageContent',
  setup() {
    return {
    }
  },
  render() {
    return (
      <div flex justify-between items-center flex-row flex-col c-red >
        <img src='http://img.yellowsea.site/acg/Hotaru_64495434.png' alt='' />
      </div>
    )
  },
})

export default PageContnet
