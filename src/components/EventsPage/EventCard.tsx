import CustomButton from "@utils/CustomButton";

export default function EventCard() {
	return (
		<div>
			<div
				className="container"
				style={{
					backgroundColor: "white",
				}}
			>
				<div className="card">
					<h1
						style={{
							color: "black",
							alignItems: "right",
						}}
					>
						SSE DAY
					</h1>
					<hr />
					<span style={{ color: "black", textAlign: "left" }}>
						Course[1]
					</span>
					<span style={{ color: "black", textAlign: "right" }}>
						Tech/ Innovations.
					</span>
					<img
						src="https://fastly.picsum.photos/id/203/1080/720.jpg?hmac=nHNAupMf3ebj_e_7cAwcOipIr3MHyCMfDjddQAXXEd0"
						alt=""
						style={{ maxWidth: "540px 360px" }}
					/>
					<div className="lower">
						<div
							className="session"
							style={{ width: "50%" }}
						>
							<h4 style={{ color: "black", font: "bold" }}>
								Session [01]
							</h4>
							<hr />
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Sapiente consequatur
								aspernatur iure veniam, ullam quos quasi
								deserunt nihil dolore rem sed error non
								reiciendis totam dicta aliquam, maiores
								excepturi saepe.
							</p>
						</div>
						<div className="button">
							<CustomButton onClick={() => {}}>
								Read More
							</CustomButton>
							<CustomButton onClick={() => {}}>
								Registation
							</CustomButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
