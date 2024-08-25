import { container } from 'tsyringe'

import { IStorageProvider } from './IStorageProvider'
import { LocalStorageProvider } from './implementations/LocalStorageProvider'

const diskStorage = {
  local: LocalStorageProvider,
}

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  diskStorage[process.env.disk],
)
