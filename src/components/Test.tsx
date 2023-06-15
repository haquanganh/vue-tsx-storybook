import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return (): JSX.Element => {
      return <div>Test</div>;
    };
  },
});
