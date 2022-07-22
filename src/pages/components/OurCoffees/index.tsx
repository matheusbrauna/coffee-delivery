import { TitleText } from '../../../components/Typography'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

import { coffees } from '../../../../coffees.json'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
