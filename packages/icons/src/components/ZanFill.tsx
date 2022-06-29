// 此文件自动生成，请勿编辑
import { defineComponent, SVGAttributes, isVue2 } from '@wakeadmin/demi';

// eslint-disable-next-line spaced-comment
export const ZanFill = /*#__PURE__*/ defineComponent<SVGAttributes>({
  name: 'WKSvgZanFill',
  inheritAttrs: true,
  render() {
    let fallthroughProps: any;

    if (isVue2) {
      fallthroughProps = {
        // @ts-expect-error
        on: this.$listeners,
      };
    }
    return (
      <svg {...fallthroughProps} viewBox="0 0 1024 1024" class="wk-svg">
        <path d="M580.16 96.192 576.64 96c-39.616 0-65.248 18.336-74.08 48.48l-1.024 3.808a73.792 73.792 0 0 0-1.888 10.784l-.672 7.904-1.376 2.464v8.512c0 51.104-24.16 103.072-65.184 152.64a451.104 451.104 0 0 1-46.56 48.32l-10.784 9.312-5.536 4.544-4.032 3.104-12.992 9.6v403.552c0 54.592 55.776 84 104.544 84h293.28c27.232 0 44.928-18.368 60.864-47.776 8-14.848 14.4-30.72 19.008-44.704l5.632-19.072 9.376-32.768 8.64-31.2 7.936-29.568 7.232-28 6.56-26.464 3.008-12.672 5.568-24.192 2.56-11.552 4.576-22.016 2.08-10.464 3.072-16.512 2.56-14.816 2.048-13.216 2.24-16.864.96-9.312.544-7.872.192-4.8c0-35.904-16.928-60.864-43.712-72.576a84.928 84.928 0 0 0-33.12-7.072l-6.88.192-151.68-.096 1.76-8c27.136-127.52 12.096-210.208-34.304-255.68-19.936-19.584-40.8-27.968-56.864-29.76zM270.272 389.76h-117.76c-22.4 0-39.872 10.688-49.28 27.712-5.344 9.6-7.104 18.592-7.232 26.208l24.192 372.608c-.064 37.792 27.52 52.544 55.584 53.44h102.432c18.208 0 33.44-6.816 43.136-19.456 6.784-8.8 9.376-18.048 9.728-26.592l.032-373.888c0-24.096-11.936-42.528-30.656-52.352a66.656 66.656 0 0 0-30.176-7.68z" />
      </svg>
    );
  },
});
