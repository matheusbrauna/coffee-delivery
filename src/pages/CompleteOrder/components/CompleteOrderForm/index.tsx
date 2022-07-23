import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  const { colors } = useTheme()
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
