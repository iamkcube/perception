import CustomButton from "@utils/CustomButton";

export default function AboutUs() {
	return (
		<div
			style={{
				display: "flex", justifyContent:"space-between", marginInline: "clamp(2rem, 4vw + 1rem , 4rem)"
				
				
			}}
		>
			<div style={{backgroundColor:'black', flex:'1'}}>
              <h6>[01]</h6>
			  <h1 style={{fontSize:'2rem', textAlign:'left'}}>About us</h1>

			</div>
			<div style={{flex:'1',backgroundColor:'black'}}>
				<ul>
					<li>
						[who we are]</li>
				</ul>
				<img src="https://fastly.picsum.photos/id/516/1080/720.jpg?hmac=_lNpyxgHTiAMdJncpoWeYSaN69YiW6exL7gwTTUHwYI" style={{paddingRight:'2rem'}} alt="" />
				<h2>Natech</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, facere? Excepturi temporibus dicta vero dolores maiores similique facilis quasi, modi veritatis! Voluptate sed, sequi cupiditate nulla odit cumque soluta quos ipsum rerum nobis quae temporibus officiis?</p>
            <CustomButton onClick={() => {}}>Read More</CustomButton>
			</div>
			
			
		</div>
	);
}
