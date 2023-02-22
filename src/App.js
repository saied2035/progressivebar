import Circle from './lib/Components/Circle'
import Rect from './lib/Components/Rect';
const App = () => {
	return (
		<>
		<Rect  
		bar={50}
		animationDuration={1}
        width={'170px'}
        height={'20px'}
        borderColor={'black'}
        barColor={'transparent'}
        animationColor={'#307bbe'}
        textColor={'black'}
        borderRadius={'0px'} />
		<Circle
		radius={30} 
        bar={40}
        barWidth={3}
        barColor={'#dcdbdc'}
        textColor={'#307bbe'}
        animationDuration={1}
        animationColor={'#307bbe'}
        size={'80px'} />
		</>
	)
}
export default App;