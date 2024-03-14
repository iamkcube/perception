import { useAuth } from "@/contexts/AuthContext";
import { useOtherContext } from "@/contexts/OtherContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Box,
	IconButton,
	Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function TermsAndConditionsPage() {
	const { isBigDevice } = useOtherContext();

	const navigate = useNavigate();
	const { userLoggedIn, userDoc, currentUser } = useAuth();

	// const {
	// 	data: eventsList,
	// 	// isLoading,
	// 	// isError,
	// } = useQuery({
	// 	queryFn: async () => await handleGetAllEvents(),
	// 	queryKey: ["eventsList"],
	// });

	const headingFontStyles = {
		fontFamily: "var(--monospace-font)",
		fontSize: "clamp(2rem, 3vw + 1rem, 4rem)",
		paddingInline: isBigDevice ? "0.25rem" : "0.2rem",
		textAlign: "center",
	};

	return (
		<Box
			width={
				isBigDevice ? "min(100% - 4rem, 1400px)" : "calc(100% - 2rem)"
			}
			marginInline={isBigDevice ? "auto" : "auto"}
			marginBlock="4rem"
		>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "1fr auto 1fr",
					justifyContent: "center",
					marginBlock: "2rem",
				}}
			>
				<IconButton
					onClick={() => navigate("../")}
					sx={{
						justifySelf: "start",
						alignSelf: "center",
					}}
				>
					<ArrowBackIcon />
				</IconButton>
				<Typography sx={headingFontStyles}>
					Terms & Conditions
				</Typography>
				{userLoggedIn && (
					<Link
						to="../login"
						style={{
							alignSelf: "center",
							justifySelf: "end",
						}}
					>
						<Avatar
							src={
								userDoc?.photoUrl ||
								currentUser?.photoURL ||
								"https://www.unsplash.it/100/100"
							}
						></Avatar>
					</Link>
				)}
			</Box>
			<Box>
				<Accordion>
					<AccordionSummary
						expandIcon={<KeyboardArrowDownIcon />}
						aria-controls="panel1-content"
						id="panel1-header"
					>
						Terms & Conditions
					</AccordionSummary>
					<AccordionDetails>
						Last updated on Mar 14 2024 <br />
						For the purpose of these Terms and Conditions, The term
						"we", "us", "our" used anywhere on this page shall mean
						KALINGA KUMAR KHATUA, whose registered/operational
						office is Qtr. No. D/2 (new,) MI Colony (Flat), Unit 9,
						Bhubaneswar Khorda ODISHA 751022 . "you", “your”,
						"user", “visitor” shall mean any natural or legal person
						who is visiting our website and/or agreed to purchase
						from us. <br />
						<b>
							Your use of the website and/or purchase from us are
							governed by following Terms and Conditions:
						</b>{" "}
						<br />{" "}
						<ul>
							<li>
								The content of the pages of this website is
								subject to change without notice.
							</li>{" "}
							<li>
								Neither we nor any third parties provide any
								warranty or guarantee as to the accuracy,
								timeliness, performance, completeness or
								suitability of the information and materials
								found or offered on this website for any
								particular purpose. You acknowledge that such
								information and materials may contain
								inaccuracies or errors and we expressly exclude
								liability for any such inaccuracies or errors to
								the fullest extent permitted by law.
							</li>{" "}
							<li>
								Your use of any information or materials on our
								website and/or product pages is entirely at your
								own risk, for which we shall not be liable. It
								shall be your own responsibility to ensure that
								any products, services or information available
								through our website and/or product pages meet
								your specific requirements.
							</li>{" "}
							<li>
								Our website contains material which is owned by
								or licensed to us. This material includes, but
								are not limited to, the design, layout, look,
								appearance and graphics. Reproduction is
								prohibited other than in accordance with the
								copyright notice, which forms part of these
								terms and conditions.
							</li>{" "}
							<li>
								All trademarks reproduced in our website which
								are not the property of, or licensed to, the
								operator are acknowledged on the website.
							</li>{" "}
							<li>
								Unauthorized use of information provided by us
								shall give rise to a claim for damages and/or be
								a criminal offense.
							</li>{" "}
							<li>
								From time to time our website may also include
								links to other websites. These links are
								provided for your convenience to provide further
								information.
							</li>{" "}
							<li>
								You may not create a link to our website from
								another website or document without KALINGA
								KUMAR KHATUA's prior written consent.
							</li>{" "}
							<li>
								Any dispute arising out of use of our website
								and/or purchase with us and/or any engagement
								with us is subject to the laws of India .
							</li>{" "}
							<li>
								We, shall be under no liability whatsoever in
								respect of any loss or damage arising directly
								or indirectly out of the decline of
								authorization for any Transaction, on Account of
								the Cardholder having exceeded the preset limit
								mutually agreed by us with our acquiring bank
								from time to time
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<KeyboardArrowDownIcon />}
						aria-controls="panel2-content"
						id="panel2-header"
					>
						Cancellation and Refund
					</AccordionSummary>
					<AccordionDetails>
						Last updated on Mar 14 2024 KALINGA KUMAR KHATUA
						believes in helping its customers as far as possible,
						and has therefore a liberal cancellation policy. Under
						this policy:
						<ul>
							<li>
								Cancellations will be considered only if the
								request is made within 7 days of placing the
								order. However, the cancellation request may not
								be entertained if the orders have been
								communicated to the vendors/merchants and they
								have initiated the process of shipping them.
							</li>

							<li>
								KALINGA KUMAR KHATUA does not accept
								cancellation requests for perishable items like
								flowers, eatables etc. However,
								refund/replacement can be made if the customer
								establishes that the quality of product
								delivered is not good.
							</li>

							<li>
								In case of receipt of damaged or defective items
								please report the same to our Customer Service
								team. The request will, however, be entertained
								once the merchant has checked and determined the
								same at his own end. This should be reported
								within 7 days of receipt of the products.
							</li>

							<li>
								In case you feel that the product received is
								not as shown on the site or as per your
								expectations, you must bring it to the notice of
								our customer service within 7 days of receiving
								the product. The Customer Service Team after
								looking into your complaint will take an
								appropriate decision.
							</li>

							<li>
								In case of complaints regarding products that
								come with a warranty from manufacturers, please
								refer the issue to them.
							</li>

							<li>
								In case of any Refunds approved by the KALINGA
								KUMAR KHATUA, it'll take 6-8 days for the refund
								to be processed to the end customer.
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<KeyboardArrowDownIcon />}
						aria-controls="panel3-content"
						id="panel3-header"
					>
						Shipping and Delivery
					</AccordionSummary>
					<AccordionDetails>
						Last updated on Mar 14 2024 <br />
						For International buyers, orders are shipped and
						delivered through registered international courier
						companies and/or International speed post only. For
						domestic buyers, orders are shipped through registered
						domestic courier companies and /or speed post only.
						Orders are shipped within 8-14 days or as per the
						delivery date agreed at the time of order confirmation
						and delivering of the shipment subject to Courier
						Company / post office norms. KALINGA KUMAR KHATUA is not
						liable for any delay in delivery by the courier company
						/ postal authorities and only guarantees to hand over
						the consignment to the courier company or postal
						authorities within 8-14 days rom the date of the order
						and payment or as per the delivery date agreed at the
						time of order confirmation. Delivery of all orders will
						be to the address provided by the buyer. Delivery of our
						services will be confirmed on your mail ID as specified
						during registration. For any issues in utilizing our
						services you may contact our helpdesk on 9776826977 or
						kalingakhatua@gmail.com
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<KeyboardArrowDownIcon />}
						aria-controls="panel3-content"
						id="panel3-header"
					>
						Privacy Policy
					</AccordionSummary>
					<AccordionDetails>
						Last updated on Mar 14 2024
						<br />
						This privacy policy sets out how KALINGA KUMAR KHATUA
						uses and protects any information that you give KALINGA
						KUMAR KHATUA when you visit their website and/or agree
						to purchase from them.
						<br />
						KALINGA KUMAR KHATUA is committed to ensuring that your
						privacy is protected. Should we ask you to provide
						certain information by which you can be identified when
						using this website, and then you can be assured that it
						will only be used in accordance with this privacy
						statement.
						<br />
						KALINGA KUMAR KHATUA may change this policy from time to
						time by updating this page. You should check this page
						from time to time to ensure that you adhere to these
						changes.
						<br />
						<b>We may collect the following information:</b>
						<ul>
							<li>Name</li>

							<li>Contact information including email address</li>

							<li>
								Demographic information such as postcode,
								preferences and interests, if required
							</li>

							<li>
								Other information relevant to customer surveys
								and/or offers
							</li>
						</ul>
						<b>What we do with the information we gather</b>
						We require this information to understand your needs and
						provide you with a better service, and in particular for
						the following reasons:
						<ul>
							<li>Internal record keeping.</li>

							<li>
								We may use the information to improve our
								products and services.
							</li>

							<li>
								We may periodically send promotional emails
								about new products, special offers or other
								information which we think you may find
								interesting using the email address which you
								have provided.
							</li>

							<li>
								From time to time, we may also use your
								information to contact you for market research
								purposes. We may contact you by email, phone,
								fax or mail. We may use the information to
								customise the website according to your
								interests.
							</li>

							<li>
								We are committed to ensuring that your
								information is secure. In order to prevent
								unauthorised access or disclosure we have put in
								suitable measures.
							</li>
						</ul>
						How we use cookies
						<br />
						A cookie is a small file which asks permission to be
						placed on your computer's hard drive. Once you agree,
						the file is added and the cookie helps analyze web
						traffic or lets you know when you visit a particular
						site. Cookies allow web applications to respond to you
						as an individual. The web application can tailor its
						operations to your needs, likes and dislikes by
						gathering and remembering information about your
						preferences.
						<br />
						We use traffic log cookies to identify which pages are
						being used. This helps us analyze data about webpage
						traffic and improve our website in order to tailor it to
						customer needs. We only use this information for
						statistical analysis purposes and then the data is
						removed from the system.
						<br />
						Overall, cookies help us provide you with a better
						website, by enabling us to monitor which pages you find
						useful and which you do not. A cookie in no way gives us
						access to your computer or any information about you,
						other than the data you choose to share with us.
						<br />
						You can choose to accept or decline cookies. Most web
						browsers automatically accept cookies, but you can
						usually modify your browser setting to decline cookies
						if you prefer. This may prevent you from taking full
						advantage of the website.
						<br />
						<b>Controlling your personal information</b>
						You may choose to restrict the collection or use of your
						personal information in the following ways:
						<ul>
							<li>
								whenever you are asked to fill in a form on the
								website, look for the box that you can click to
								indicate that you do not want the information to
								be used by anybody for direct marketing purposes
							</li>

							<li>
								if you have previously agreed to us using your
								personal information for direct marketing
								purposes, you may change your mind at any time
								by writing to or emailing us at
								kalingakhatua@gmail.com
							</li>
						</ul>
						We will not sell, distribute or lease your personal
						information to third parties unless we have your
						permission or are required by law to do so. We may use
						your personal information to send you promotional
						information about third parties which we think you may
						find interesting if you tell us that you wish this to
						happen.
						<br />
						If you believe that any information we are holding on
						you is incorrect or incomplete, please write to Qtr. No.
						D/2 (new,) MI Colony (Flat), Unit 9, Bhubaneswar Khorda
						ODISHA 751022 . or contact us at 9776826977 or
						kalingakhatua@gmail.com as soon as possible. We will
						promptly correct any information found to be incorrect.
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<KeyboardArrowDownIcon />}
						aria-controls="panel3-content"
						id="panel3-header"
					>
						Contact Us
					</AccordionSummary>
					<AccordionDetails>
						Last updated on Mar 14 2024
						<br />
						You may contact us using the information below:
						<br />
						Merchant Legal entity name: KALINGA KUMAR KHATUA
						<br />
						Registered Address: Qtr. No. D/2 (new,) MI Colony
						(Flat), Unit 9, Bhubaneswar Khorda ODISHA 751022
						<br />
						Telephone No: 9776826977
						<br />
						E-Mail ID: kalingakhatua@gmail.com
						<br />
					</AccordionDetails>
				</Accordion>
			</Box>
		</Box>
	);
}
