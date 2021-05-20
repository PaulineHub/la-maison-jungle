import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

/*afficher un élément  div  qui contient le mot “Soldes” si la plante est en promotion.*/

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        {plant.name}
                        <CareScale scaleValue={plant.light} />
                        </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList