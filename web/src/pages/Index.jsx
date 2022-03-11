import {LandApi} from 'utils/api'
import 'assets/css/index.css'
import { useEffect, useState } from 'react'

const Index = () => {
	const [whatsapp, setWhatsapp] = useState('')
	const [email, setEmail] = useState('')
	useEffect(() => {
		LandApi().then((res) => {
			console.log(res.data);
			setWhatsapp(res.data.whatsapp)
			setEmail(res.data.email)
		})
		} )
	return (
		<div className='index'>
			<div className='img'>
				<div style={{position: 'absolute', top: '4%', left: '1rem', fontSize: '2rem', fontWeight: 'bold'}}>
					We're Hiring
				</div>
					<div style={{ position: 'absolute', top: '8%', left: '1.1rem', fontSize: '1.5rem'}}>
						I have a big dream
					</div>

				<div style={{position: 'absolute', top: '12%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					1. Store manager
				</div>
				<div style={{position: 'absolute', top: '12%', left: '11rem', fontSize: '1rem', fontWeight: 'bold'}}>
					2. Data base office
				</div>
				<div style={{position: 'absolute', top: '15%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					3. Graphic designer
				</div>
				<div style={{position: 'absolute', top: '15%', left: '11rem', fontSize: '1rem', fontWeight: 'bold'}}>
					4. Cashier
				</div>
				<div style={{position: 'absolute', top: '18%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					5. Female sales associates
				</div>
				<div style={{position: 'absolute', top: '21%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					6. Salesman(electronics)
				</div>
				<div style={{position: 'absolute', top: '24%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					7. Baker&Pastry Chef
				</div>
				<div style={{position: 'absolute', top: '27%', left: '11rem', fontSize: '1rem', fontWeight: 'bold'}}>
					8. Butcher
				</div>
				<div style={{position: 'absolute', top: '27%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					9. Fish Monger
				</div>
				<div style={{position: 'absolute', top: '30%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					10. Stockers/Merchandisers
				</div>
				<div style={{position: 'absolute', top: '33%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					11. Driver(light to medium vehicle)
				</div>
				<div style={{position: 'absolute', top: '36%', left: '1rem', fontSize: '1rem', fontWeight: 'bold'}}>
					12. Part time worker
				</div>
				<div style={{position: 'absolute', top: '46%', left: '1rem', fontSize: '2rem', fontWeight: 'bold', color: '#ff0000'}}>
					Requirements:
				</div>
					<div style={{ position: 'absolute', top: '51%', left: '1rem', fontSize: '1rem'}}>
						Ready to join immediately
					</div>
					<div style={{ position: 'absolute', top: '54%', left: '1rem', fontSize: '1rem'}}>
 						Do not need job experience
					</div>
					<div style={{ position: 'absolute', top: '57%', left: '1rem', fontSize: '1rem'}}>
						Previous sales experience is a plus
					</div>
					<div style={{ position: 'absolute', top: '60%', left: '1rem', fontSize: '1rem'}}>
						Excellent communication and customer service skills
					</div>
					<div style={{ position: 'absolute', top: '63%', left: '1rem', fontSize: '1rem'}}>
						Able to multitask in a fast-paced environment
					</div>
					<div style={{ position: 'absolute', top: '66%', left: '1rem', fontSize: '1rem'}}>
						Flexibility of part time work
					</div>
					<div className='right-text'>
					</div>
				<div className='bottom'>
					
					<div style={{ position: 'absolute', top: '5%', left: '2rem', fontSize: '1rem', color: '#fff'}}>
						If you meet the above requirements
					</div>
					<div style={{ position: 'absolute', top: '18%', left: '2rem', fontSize: '1.5rem', fontWeight:'bold', color: '#fff'}}>
						Please send your application and indicate the position applied for as the subject of your email to:
					</div>
					<div style={{ position: 'absolute', top: '55%', left: '2rem', fontSize: '1.5rem',  color: '#fff'}}>
						Whatsapp: {whatsapp}
					</div>
					<div style={{ position: 'absolute', top: '75%', left: '2rem', fontSize: '1.5rem', color: '#fff'}}>
						Email: {email}
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default Index
