// ** Icon imports
import {
  CubeOutline,
  HomeOutline,
  AccountCogOutline,
  AccountPlusOutline,
  AccountGroup,
  TextBoxPlusOutline,
  FileReplaceOutline,
  FileMultiple,
  FileSign,
  ArchiveCog,
  MedicalBag,
  Pill,
  MonitorDashboard
} from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Meu Perfil',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pacientes'
    },

    {
      title: 'Novo Paciente',
      icon: AccountPlusOutline,
      path: '/patients/create'
    },

    {
      title: 'Meus Pacientes',
      icon: AccountGroup,
      path: '/patients/list'
    },

    {
      sectionTitle: 'Receitas'
    },
    {
      title: 'Emitir Receita',
      icon: TextBoxPlusOutline,
      path: '/prescriptions/create'
    },

    {
      title: 'Receitas Emitidas',
      icon: FileSign,
      path: '/prescriptions/issued'
    },

    {
      title: 'Reenviar Receita',
      icon: FileReplaceOutline,
      path: '/prescriptions/resend'
    },
    {
      title: 'Minhas Receitas',
      icon: FileMultiple,
      path: '/prescriptions/list'
    },
    {
      title: 'Controle de Receituário',
      path: '/prescriptions/control',
      icon: ArchiveCog
    },

    {
      sectionTitle: 'Configurações'
    },
    {
      title: 'Profissionais de Saúde',
      icon: MedicalBag,
      path: '/settings/health-professionals'
    },

    {
      title: 'CID',
      icon: CubeOutline,
      path: '/settings/cid'
    },
    {
      title: 'Medicamentos',
      icon: Pill,
      path: '/settings/medicines'
    },

    {
      title: 'Auditoria do Sistema',
      icon: MonitorDashboard,
      path: '/settings/system-audit'
    }
  ]
}

export default navigation
