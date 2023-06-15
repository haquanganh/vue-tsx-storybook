import { defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  props: {
    /**
     * The label of the button
     */
    variant: {
      type: Object as PropType<'primary' | 'secondary'>,
      default: 'secondary',
    },
    size: {
      type: Object as PropType<'small' | 'large'>,
      default: 'small',
    },
    label: String,
    onClick: Function as PropType<() => void>,
  },
  setup(props) {
    const { label, variant, size } = toRefs(props);
    const { onClick } = props;
    return (): JSX.Element => (
      <div
        class={['button', `button--${variant.value}`, `button--${size.value}`]}
        onClick={() => onClick!()}
      >
        {label.value}
      </div>
    );
  },
});
