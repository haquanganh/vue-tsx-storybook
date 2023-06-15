import { defineComponent } from 'vue';
import Button from './components/Button';

export default defineComponent({
  setup() {
    return () => (
      <Button
        label="Test"
        on-click={() => {
          alert(111);
        }}
      />
    );
  },
});
