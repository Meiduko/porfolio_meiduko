import AstroIcon from "@/assets/icons/tech/AstroIcon.astro"
import CSSIcon from "@/assets/icons/tech/CSSIcon.astro"
import JavaScriptIcon from "@/assets/icons/tech/JavaScriptIcon.astro"
import ReactIcon from "@/assets/icons/tech/ReactIcon.astro"
import TailwindIcon from "@/assets/icons/tech/TailwindIcon.astro"
import HTMLIcon from "@/assets/icons/tech/HTMLIcon.astro"

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
