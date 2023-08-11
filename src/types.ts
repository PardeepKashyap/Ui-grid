export interface ExportOutputType {
  name: string
  label: string
}

export interface ExportOption {
  name: string
  label: string
  description: string
  outputTypes: ExportOutputType[]
}

export interface ExportConfigItem {
  name: string
  label: string
  description?: string
  host?: string
  callback?: string
  id?: string
  actionLabel?: string
  disabled?: boolean
  options?: ExportOption[]
}

export interface TenantConfigField {
  category: string
  label: string
  type?: string
  payloadValueSpace?: string
}

export interface UIConfig {
  isExportDisabled?: boolean
  fields: {
    primary: Array<TenantConfigField>
    secondary: Array<Array<TenantConfigField>>
    hidden: string[]
    tags: string[]
    titleCategory: string
    alertMessage?: string
  }
  exports: ExportConfigItem[]
}

interface Watermark {
  url: string
  opacity: number
  position: string
  margin: string
  width: string
}

export interface Player {
  watermark?: Watermark
  format: 'MP4' | 'HLS'
}

export interface TenantConfig {
  ui: UIConfig,
  auth?: any
  player?: Player
}
