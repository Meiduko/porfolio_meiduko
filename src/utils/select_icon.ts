import AstroIcon from "@/assets/icons/AstroIcon.astro"
import CSSIcon from "@/assets/icons/CSSIcon.astro"
import JavaScriptIcon from "@/assets/icons/JavaScriptIcon.astro"
import ReactIcon from "@/assets/icons/ReactIcon.astro"
import TailwindIcon from "@/assets/icons/TailwindIcon.astro"
import HTMLIcon from "@/assets/icons/HTMLIcon.astro"

export const TECHENUM = ['Astro', 'React', 'TailwindCSS', 'CSS', 'JavaScript', 'HTML'] as const
export type techType = (typeof TECHENUM)[number]

export const iconMap: Record<techType, any> = {
  'Astro': AstroIcon,
  'React': ReactIcon,
  'TailwindCSS': TailwindIcon,
  'CSS': CSSIcon,
  'JavaScript': JavaScriptIcon,
  'HTML': HTMLIcon
}
