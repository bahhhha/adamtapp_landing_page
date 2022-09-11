import "./App.css";
import giftpic from "./gifts.svg";
import teampic from "./team.svg";
import mappic from "./map.svg";
import awardspic from "./awards.svg";
import fundpic from "./fund.webp";
import governmentpic from "./government.webp";
import sportpic from "./sport.webp";
import hospitalpic from "./hospital.webp";
import expertspic from "./experts.webp";
import communicationpic from "./communication.webp";
import clockpic from "./24hour.webp";
import React from "react";

const icons = [
	{
		id: 1,
		name: "Гос. структурам",
		img: governmentpic,
	},

	{
		id: 2,
		name: "Фондам",
		img: fundpic,
	},
	{
		id: 3,
		name: "Спорт. организациям",
		img: sportpic,
	},
	{
		id: 4,
		name: "Соц. предприятиям и НПО",
		img: hospitalpic,
	},
	// {
	// 	id: 5,
	// 	name: "Музыкантами",
	// 	img: musicpic,
	// },
];

const benefits = [
	{
		id: 1,
		text: "Автоматизированную организацию тренированных волонтеров в больших количествах в любое время",
		icon: clockpic,
	},
	{
		id: 2,
		text: "Удобную платформу с огромной базой данных для общения между организациями в реальном времени",
		icon: communicationpic,
	},
	{
		id: 3,
		text: "Помощь наших специалистов по организации мероприятий",
		icon: expertspic,
	},
];

const Benefit = ({ text, icon }) => {
	return (
		<div className="flex lg:flex-row flex-col justify-start lg:w-1/3 w-1/2 py-7 m-auto text-left text-xl font-light lg:py-5">
			<div className="flex w-1/6 m-auto">
				<img
					src={icon}
					alt={text}
					className="w-24 h-8 object-scale-down"
				></img>
			</div>
			<div className="text-white w-full">{text}</div>
		</div>
	);
};

const Benefits = () => {
	const res = benefits.map((benefit) => (
		<Benefit text={benefit.text} icon={benefit.icon} />
	));
	return (
		<div className=" py-5">
			<div className="text-white text-center font-semibold text-3xl py-3">
				Мы предлагаем:
			</div>
			<div>{res}</div>
		</div>
	);
};

const Icon = ({ name, img }) => {
	return (
		<div className="flex flex-col border-white justify-start py-2.5">
			<div className="flex justify-center">
				<img src={img} alt={name} className="w-24"></img>
			</div>
			<div className="text-center text-white font-semibold text-l py-1">
				{name}
			</div>
		</div>
	);
};

const Icons = () => {
	const res = icons.map((icon) => (
		<Icon name={icon.name} img={icon.img} />
	));
	return (
		<div className="lg:py-5">
			<div className="text-white text-3xl font-semibold text-center py-3">
				Мы помогаем:
			</div>
			<div className="flex lg:p-6 flex-col columns-2xs lg:flex-row justify-around w-max lg:w-1/2 m-auto">
				{res}
			</div>
		</div>
	);
};

const Feature1 = () => {
	return (
		<div className="bg-white lg:text-right p-5">
			<div className="flex flex-col lg:flex-row text-lg lg:justify-center lg:w-4/5 w-4/5 lg:text-lg m-auto gap-10">
				<div className="lg:w-1/3 lg:text-lg">
					<div className="text-emerald-400 md:text-4xl text-3xl pb-5 lg:pb-8 font-bold">
						Система наград
					</div>
					Помогая другим и участвуя в волонтерских
					мероприятиях, Вы гарантированно получаете
					монеты AdamCoin. Вы можете конвертировать их
					в криптовалюту, или же приобретать на них
					подарки в спонсорских организациях. Делая
					добро, Вы можете бесплатно угостить себя
					свежесваренным кофе, шоколадками, бесплатными
					играми, и скидками в лучших магазинах города!
				</div>
				<div>
					<img
						src={giftpic}
						alt="gifts"
						className="object-scale-down lg:w-6/7"
					></img>
				</div>
			</div>
		</div>
	);
};

const Feature2 = () => {
	return (
		<div className="bg-white text-left p-5">
			<div className="flex flex-col-reverse lg:flex-row lg:justify-center text-lg lg:w-3/5 w-4/5 lg:text-lg m-auto">
				<div>
					<img
						src={teampic}
						alt="team"
						className="object-scale-down lg:w-6/7"
					></img>
				</div>
				<div className="lg:w-1/3 lg:text-lg">
					<div className="chosentext md:text-4xl text-3xl py-5 lg:pb-5 font-bold">
						Быстрая организация
					</div>
					Нужна помощь? Организовывайте мероприятия за
					пару кликов и выбирайте среди лучших
					волонтеров! Встроенный чат,
					автоматизированная регистрация, подбор
					качественных волонтеров на основе ИИ, а также
					тренированные координаторы ускорят процесс
					организации в разы.
				</div>
			</div>
		</div>
	);
};

const Feature3 = () => {
	return (
		<div className="bg-white lg:text-right lg:p-10 p-5">
			<div className="flex flex-col lg:flex-row text-lg lg:justify-center lg:w-5/6 3xl:w-1/5 w-4/5 lg:text-lg m-auto gap-10">
				<div className="lg:w-1/3 lg:text-lg">
					<div className="text-emerald-400 md:text-4xl text-3xl pb-5  font-bold">
						Нетворкинг
					</div>
					Огромная база данных волонтерских организаций
					с картой для удобного поиска нужных людей и
					мероприятий. Информация про любой движ в
					стране теперь помещается в Вашем телефоне.
					Общайтесь с другими волонтерами, находите
					друзей и создавайте команды единомышленников.
				</div>
				<div>
					<img
						src={mappic}
						alt="map"
						className="object-scale-down lg:w-4/5"
					></img>
				</div>
			</div>
		</div>
	);
};

const Feature4 = () => {
	return (
		<div className="bg-white text-left lg:pb-10 p-5">
			<div className="flex flex-col-reverse lg:flex-row lg:justify-center text-lg lg:w-3/5 3xl:w-1/5 w-4/5 lg:text-lg m-auto">
				<div>
					<img
						src={awardspic}
						alt="team"
						className="object-scale-down w-4/5"
					></img>
				</div>
				<div className="lg:w-1/3 lg:text-lg">
					<div className="chosentext md:text-4xl text-3xl py-5 lg:pb-5 font-bold">
						Ежесезонные подарки
					</div>
					Любите помогать? Теперь Вас заметят!
					Попадайте в топ волонтеров по итогу сезона и
					получайте многочисленные призы, сертификаты и
					стажировки от нас и наших партнеров!
				</div>
			</div>
		</div>
	);
};

const NavBar = () => {
	return (
		<nav className="w-max lg:w-1/2 m-auto flex flex-col text-center lg:flex-row sm:text-center justify-around lg:pb-20 py-7 text-l text-white">
			<div className="mb-2 sm:mb-1">
				<p
					href="/home"
					className="text-2xl lg:text-3xl font-bold"
				>
					AdamTapp
				</p>
			</div>
			<div className="space-x-5 py-1.5 w-max ">
				<a
					href="/home"
					className="p-3 text-green-800 hover:bg-gray-100 duration-200 hover:text-gray-700 font-semibold bg-emerald-400 px-5 rounded-full"
				>
					Главная
				</a>
				<a
					href="/volunteers"
					className="hover:text-emerald-400 duration-200"
				>
					Волонтеры
				</a>
				<a
					href="/organizers"
					className="hover:text-emerald-400 duration-200"
				>
					Организаторы
				</a>
				<a
					href="/organizers"
					className="hover:text-emerald-400 duration-200"
				>
					О нас
				</a>
			</div>
		</nav>
	);
};

const WelcomeText = () => {
	return (
		<div>
			<div className="lg:w-3/4 w-4/5 text-center lg:py-16 pb-5 lg:leading-tight m-auto text-4xl lg:text-5xl font-semibold text-white">
				Единый хаб волонтеров, система наград и карта
				мероприятий в Вашем кармане.
			</div>
			<div className="lg:w-2/5 w-4/5 py-2 text-white m-auto text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis
				nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore
				eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia
				deserunt mollit anim id est laborum.
			</div>
			<div className=" text-center py-10  lg:pb-20 ">
				<button className="hover:bg-emerald-500 hover:text-gray-900 duration-300 p-3.5 rounded-3xl shadow-xl shadow-2 font-semibold text-xl bg-emerald-400 text-green-900">
					Оставить заявку
				</button>
			</div>
		</div>
	);
};

const ContactForm = () => {
	return (
		<form class="w-full max-w-lg lg:w-1/2 m-auto py-10">
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Имя
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Аян"
					></input>
				</div>
				<div class="w-full md:w-1/2 px-3">
					<label
						class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						for="grid-last-name"
					>
						Фамилия
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-last-name"
						type="text"
						placeholder="Арыстан"
					></input>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						for="grid-password"
					>
						E-mail
					</label>
					<input
						class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="email"
						type="email"
					></input>
				</div>
			</div>
			<div class="mt-4">
				<label
					class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
					for="grid-password"
				>
					Ваша роль:
				</label>
				<div className="mt-4 text-white text-s mb-4 font-medium">
					<label class="inline-flex items-center">
						<input
							type="radio"
							class="form-radio"
							name="accountType"
							value="personal"
						></input>
						<span class="ml-2">Волонтер</span>
					</label>
					<label class="inline-flex items-center ml-6">
						<input
							type="radio"
							class="form-radio"
							name="accountType"
							value="busines"
						></input>
						<span class="ml-2">Организатор</span>
					</label>
					<label class="inline-flex items-center ml-6">
						<input
							type="radio"
							class="form-radio"
							name="accountType"
							value="busines"
						></input>
						<span class="ml-2">Партнер</span>
					</label>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label
						class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
						for="grid-password"
					>
						Сообщение
					</label>
					<textarea
						class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
						id="message"
					></textarea>
				</div>
			</div>
			<div class="md:flex md:items-center">
				<div class="md:w-1/3">
					<button
						class="shadow bg-emerald-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
						type="button"
					>
						Отправить
					</button>
				</div>
				<div class="md:w-2/3"></div>
			</div>
		</form>
	);
};

const ForOrgs = () => {
	return (
		<div className="outro">
			<Icons />
			<Benefits />
			<ContactForm />
		</div>
	);
};

function App() {
	return (
		<div>
			<div>
				<NavBar />
				<WelcomeText />
				<Feature1 />
				<Feature2 />
				<Feature3 />
				<Feature4 />
				<ForOrgs />
			</div>
		</div>
	);
}

export default App;
