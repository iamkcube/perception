import CustomButton from "@utils/CustomButton";

export default function AboutUs() {
	return (
		<div
			style={{
				display: "flex", justifyContent:"space-between", margin:'4rem'
				
				
			}}
		>
			<div style={{backgroundColor:'black', flex:'1'}}>
              <h6 style={{position: 'relative' ,left:'2rem'}}>[01]</h6>
			  <h1 style={{fontSize:'2rem', textAlign:'left', position: 'relative' ,left:'2rem'}}>About us</h1>

			</div>
			<div style={{flex:'1',backgroundColor:'blue'}}>
				<ul>
					<li>
						[who we are]</li>
				</ul>
				<img src="https://fastly.picsum.photos/id/516/1080/720.jpg?hmac=_lNpyxgHTiAMdJncpoWeYSaN69YiW6exL7gwTTUHwYI" style={{height:'720', width:'1080' ,padding:'2rem'}} alt="" />
				<h2 style={{position: 'relative' ,left:'2rem'}}>Natech</h2>
				<p style={{position: 'relative' ,left:'2rem'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, facere? Excepturi temporibus dicta vero dolores maiores similique facilis quasi, modi veritatis! Voluptate sed, sequi cupiditate nulla odit cumque soluta quos ipsum rerum nobis quae temporibus officiis?</p>
            <CustomButton onClick={() => {}}>Read More</CustomButton>
			</div>
			
			
		</div>
	);
}
