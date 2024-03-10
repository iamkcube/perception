import CustomButton from "@utils/CustomButton";

export default function EventCard() {
	return (
		<div
		style={{
			backgroundColor:'white'
		}}>
			<h1
			style={{
				color:'black',
				textAlign:'right'
			}}>SSE DAY</h1>
			<hr />
			<span
			style={{
				color:'black',
				textAlign:'left 2rem'
			}}>Session [1]</span>
			<span
			style={{
				color:'black',
				textAlign:'right 2rem'
			}}>Tech/Innovations.</span>
			<img 
			style={{
				// object-fit: 'cover';
				
			}}
			src="https://unsplash.it/1080/720" alt="" />
			<div
			style={{
				width:'50%'
			}}><h4
			style={{
				color:'black',
				textAlign:'left 2rem'
			}}>Session [01]</h4>
			<hr />

			</div>
			<div
			style={{
				alignItems:'right',
				width:'50%'
	
			}}>
			<CustomButton
					color="primary"
					sx={{
						alignSelf: "flex-start",
					}}
					onClick={() => {}}
				>
					Read More
				</CustomButton>
				<CustomButton
					color="primary"
					sx={{
						alignSelf: "flex-start",
					}}
					onClick={() => {}}
				>
					Registation.
				</CustomButton>
				</div>
		</div>
	);
}
