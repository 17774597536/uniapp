import { defineStore } from "pinia";
import { computed } from "vue";
import { extractFileName } from "@/utils/tool";
import { deepClone } from "@/utils/tool";

interface SvgIconsItem {
  name: string;
  url: string;
}

export const useSvgIconStore = defineStore("svg-icons", () => {
  const SVG_ICONS_MODULES = computed(() => Object.keys(import.meta.glob(`../assets/svg-icons/**/*.svg`)));

  function getLocalSvgIconsList(): SvgIconsItem[] {
    let svgList = deepClone(SVG_ICONS_MODULES.value as any);
    for (let svg in svgList) {
      svgList[svg] = {
        name: extractFileName(svgList[svg]),
        url: svgList[svg]
      } as SvgIconsItem;
    }
    console.log("svgList", svgList);
    return svgList;
  }

  /**
   * 通过svg图片名称获取url
   * @param svgName
   */
  function getSvgUrl(svgName: string) {
    const findSvg = getLocalSvgIconsList()?.find(f => f.name === svgName);
    if (findSvg) {
      return findSvg.url;
    } else {
      return "/src/static/icons/znak-no-img.svg";
    }

  }
  return {
    SVG_ICONS_MODULES,
    getLocalSvgIconsList,
    getSvgUrl,
  };
});