import { MapPin, CurrencyDollar, Clock } from 'phosphor-react'

import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedPageContainer, OrderDetailsContainer } from './styles'

import confirmedOrderImg from '../../assets/confirmed-order-img.png'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'

export function OrderConfirmedPage() {
  const { colors } = useTheme()
  return (
    <OrderConfirmedPageContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli 102</strong>,
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min </strong>,
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>,
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderImg} alt="" />
      </section>
    </OrderConfirmedPageContainer>
  )
}
