import Slider from 'react-animated-slider';

export default function CarouselSlideshow() {

    const content = [
        {
            title: 'MCDF Orphans',
            description:
            'is the operating name for Mushayamunda Christian Development Foundation (MCDF) which was formed and is led by the Mushayamunda brothers and their families.',
            image: 'images/orphan.gif'
        },
        {
            title: 'Tortor Dapibus Commodo Aenean Quam',
            description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
            image: 'images/school.gif'
        },
        {
            title: 'Phasellus volutpat metus',
            description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
            image: 'images/garden.gif'
        }
    ];

    return (
        <Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</Slider>
    )
}