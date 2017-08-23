import React from "react";
import scrollreveal from "scrollreveal";
import Field from '../../components/field/Field.js';
import smoothScroll from 'smoothscroll';
import Mail from '../../services/mail.js';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import mailTemplate from './mail.js';
import 'react-notifications/lib/notifications.css';
import "./index.css";

class Index extends React.Component {
	constructor(props) {
		super(props);
		const { secret, mailsendurl } = this.props.configuration;
		this.mail = new Mail(
			secret, 
			'Иван из Levelup Worlds', 
			'beatzhitta@gmail.com', 
			'Новая заявка на сайте Levelup.Promo',
			mailsendurl
		);
		this.state = {
			message: {}
		}
	}
	componentDidMount() {
		initScrollReveal(scrollreveal());
		backgroundWrapperMove();
		bindSmoothScrolling();
	}
	handleSubmit(e, html) {
		e.preventDefault();
		const { userName, userEmail, userNumber, spamDetection } = this.state.message;
		if(userName && userEmail && userNumber) {
			if(!spamDetection) {
				this.mail.send(html).then((response) => {
					const { success, message } = response.data;
					if(success) {
						return NotificationManager.success(message, 'Успех');
					} else {
						return NotificationManager.error(message, 'Ошибка');
					}
				})
			} else {
				return NotificationManager.error('Извините, вы похожи на бота', 'Ошибка');
			}
		} else {
			return NotificationManager.error('Одно или несколько обязательных полей не были заполнены', 'Ошибка');
		}
	}
	updateMessage = (key, fieldName, value) => {
		this.setState({
			message: {
				...this.state.message,
				[key]: {
					fieldName,
					value
				}
			}
		})
	}
	render() {
		return (
			<div className="Index-page page">
				<NotificationContainer />
				<section className="fullpage center text first">
					<div className="section-background">
						<img src="/img/wallpaper.jpg" width="100%" />
					</div>
					<div className="container">
						<div className="logo">
							<img src="img/basic-inverted-full-128x128.png" alt="Levelup Promo" />
						</div>
						<div className="jumbotron inverted">
							<div className="jumbotron-title">
								<h3 className="super title">Levelup <span className="primary">Promo</span></h3>
							</div>
							<div className="jumbotron-content">
								<p className="primary">
									Ваш бренд плохо узнают? Помогите вашим клиентам разглядеть в вас узнаваемый бренд!
									Мы научим ваш бизнес общаться с людьми при помощи социальных сетей.
								</p>
							</div>
							<div className="jumbotron-actions">
								<button className="button" data-scrollTo=".intro">Как это работает?</button>
							</div>
						</div>
					</div>
				</section>
				<section className="center intro">
					<div className="container wide fullpage">
						<div className="section-title">
							<h5 className="super">Как это работает?</h5>
							<div className="description">Покажем на примере!</div>
						</div>
						<div className="section-content">
							<div className="intro-example">
								<div className="item">
									<img src="img/shopping-cart.png" alt="Корзина" />
									<h4>1. Покупка</h4>
									<p>Клиент знакомится с брендом и совершает покупку</p>
								</div>
								<div className="item">
									<img src="img/like.png" alt="Корзина" />
									<h4>2. Подписка</h4>
									<p>Клиент "следит" за вашим брендом и проявляет активность</p>
								</div>
								<div className="item">
									<img src="img/network.png" alt="Сеть" />
									<h4>3. Новые клиенты</h4>
									<p>Клиент рассказывает о вашем бренде своим друзьям</p>
								</div>
								<div className="item">
									<img src="img/arrow.png" alt="Корзина" />
									<h4>4. Прибыль</h4>
									<p>Благодаря новым вовлечениям вы получаете больше прибыли</p>
								</div>
							</div>
						</div>
						<div className="section-actions">
							<button className="button" data-scrollTo=".third">Преимущества</button>
						</div>
					</div>
				</section>
				<section className="center text second">
					<div className="container">
						<div className="section-title">
							<h4 className="super">Статистика</h4>
							<div className="description">Немного цифр</div>
						</div>
						<div className="section-content">
							<div className="stages">
								<div className="stage">
									<div className="count">43%</div>
									<div className="title">2014</div>
								</div>
								<div className="stage">
									<div className="count">59%</div>
									<div className="title">2015</div>
								</div>
								<div className="stage">
									<div className="count">78%</div>
									<div className="title">2016</div>
								</div>
								<div className="stage primary">
									<div className="count">80%</div>
									<div className="title">2017</div>
								</div>
							</div>
							<p className="primary">Процент покупателей, которые перед покупкой искали 
							информацию о товаре в социальных сетях. И этот процент растёт с каждым днём!</p>
						</div>
						<div className="section-actions">
							<button className="button" data-scrollTo=".third">Преимущества</button>
						</div>
					</div>
				</section>
				<section className="fullpage center third">
					<div className="container">
						<div className="section-title">
							<h5 className="super">Почему стоит довериться именно нам?</h5>
							<div className="description">Немного о приемуществах</div>
						</div>
						<div className="section-content">
							<div className="advantages">
								<div className="advantage">
									<div className="advantage-image">
										<img src="img/team.png" alt="Команда" />
									</div>
									<div className="advantage-content">
										<h6 className="advantage-title super">
											Над рекламной кампанией по продвижению будет работать 
											целая команда профессионалов
										</h6>
										<div className="advantage-description">
											<p>
												Чтобы процесс организации рекламной кампании шёл более эффективно, 
												мы привлекаем к процессу целый список специалистов: стратег, 
												контент-менеджер, копирайтер, таргетолог, комьюнити-менеджер, креатор, дизайнер
											</p>
										</div>
									</div>
								</div>
								<div className="advantage">
									<div className="advantage-image">
										<img src="img/startup.png" alt="Опыт" />
									</div>
									<h6 className="advantage-title super">
										Наша команда имеет большой опыт работы в сфере продвижения
									</h6>
									<div className="advantage-description">
										<p>
											Наша команда успешно спланировала и реализовала уже более 50 рекламных кампаний 
											для реальных брендов. Благодаря нашей работе бизнес многих наших клиентов обрёл 
											дополнительный доход!
										</p>
									</div>
								</div>
								<div className="advantage">
									<div className="advantage-image">
										<img src="img/money.png" alt="Деньги" />
									</div>
									<h6 className="advantage-title super">
										Отдать ваши социальные сети в наши руке выйдет дешевле, чем найти штатного работника!
									</h6>
									<div className="advantage-description">
										<p>
											На данный момент ауторсинг набирает популярность во всех сферах нашей жизни и продвижение
											социальных сетей - не исключение. Одна из главных причин этому - сравнительная дешевизна по сравнению с наймом в штат нового специалиста.
										</p>
									</div>
								</div>
								<div className="advantage">
									<div className="advantage-image">
										<img src="img/camera.png" alt="Камера" />
									</div>
									<h6 className="advantage-title super">
										Мы имеем все ресурсы для того, чтобы создавать мультиформатный контент!
									</h6>
									<div className="advantage-description">
										<p>
											Профессиональная фотография или видео сделают ваш продукт более привлекательным, а значит это поможет вам увеличить продажи.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="section-actions">
							<button className="button" data-scrollTo=".sixth">А ещё?</button>
						</div>
					</div>
				</section>
				<section className="center fourth">
					<div className="container">
						<div className="section-title">
							<h5 className="super">Больше времени аналитике!</h5>
							<div className="description">Ваш штатный маркетолог занимается контентом в социальных сетях? Теперь он сможет больше уделить времени аналитике!</div>
						</div>
						<div className="section-content">
							<div className="list horizontal">
								<div className="item">
									<img src="img/edit.png" alt="Текст" />
									<h4>Текст</h4>
								</div>
								<div className="item">
									<img src="img/video-player.png" alt="Видео" />
									<h4>Видео</h4>
								</div>
								<div className="item">
									<img src="img/photo-camera.png" alt="Фото" />
									<h4>Фото</h4>
								</div>
								<div className="item">
									<img src="img/musical-note.png" alt="Музыка" />
									<h4>Музыка</h4>
								</div>
							</div>
							<p className="primary">Наша команда, состоящая из 8 человек готова генерировать уникальный контент самых разных типов: от текстового копирайтинга до высококачественного видео.</p>
						</div>
						<div className="section-actions">
							<button className="button" data-scrollTo=".seventh">Выбрать тарифный план</button>
						</div>
					</div>
				</section>
				<section className="center fullpage fifth">
					<div className="container">
						<div className="section-title">
							<h5 className="super">Визуализация</h5>
							<div className="description">Посмотрите как это происходит в действии</div>
						</div>
						<div className="section-content">
							<p className="primary">Если сравнивать SMM со стандартными методами продвижения, стратегия продвижения в социальных сетях выигрывает в 3-4 раза!</p>
							<div className="graph">
								<img src="/img/graph.png" width="100%" />
								<div className="x-axis">Продолжительность кампании</div>
								<div className="y-axis">Вирусный прирост</div>
							</div>
						</div>
					</div>
				</section>
				<section className="center sixth">
					<div className="container">
						<div className="section-title">
							<h5 className="super">Сначала бренд, потом прибыль!</h5>
							<div className="description">Первое правило SMM</div>
						</div>
						<div className="section-content">
							<p className="primary">Мероприятия по раскрутке и внедрению бренда - лишь подготовительная часть для совершения реальных продаж и получения прибыли</p>
							<div className="intro-example three">
								<div className="item">
									<img src="img/feedback.png" alt="Фидбэк" />
									<h4>Обратная связь</h4>
									<p>Обеспечьте постоянную обратную связь между вашим брендом и клиентом</p>
								</div>
								<div className="item">
									<img src="img/wind.png" alt="Негатив" />
									<h4>Работа с негативом</h4>
									<p>Слушайте своих клиентов и анализируйте данные для увелечения прибыли!</p>
								</div>
								<div className="item">
									<img src="img/network.png" alt="Сеть" />
									<h4>Глубокое вовлечение</h4>
									<p>Дайте вашим клиентам стать частью вашего бренда и получите хорошую отдачу</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="fullpage center sixth">
					<div className="container">
						<div className="section-title">
							<h5 className="super">Всё ещё сомневаетесь?</h5>
							<div className="description">Узнайте больше и развейте сомнения!</div>
						</div>
						<div className="section-content">
							<div className="list wide with-margin-bottom">
								<div className="item">
									<h5 className="super">Лояльность пользователей</h5>
									<p>Пользователи социальных сетей больше не воспринимают вашу рекламную кампанию как ярко выраженную рекламу, которая может вызывать негатив. Пользователи больше склонны доверять информации в социальных сетях, чем в обычных рекламных объявлениях</p>
								</div>
								<div className="item">
									<h5 className="super">Точечный выбор целевой аудитории</h5>
									<p>Благодаря функционалу социальных сетей, теперь существует возможность тщательно выбирать пользователей, на которых будет расчитана рекламная кампания. Это позволит охватить целевую аудиторию с большей точностью, что повлечет прирост новых вовлечённых клиентов</p>
								</div>
								<div className="item">
									<h5 className="super">Работа с целевой аудиторией</h5>
									<p>Целевая аудитория - это ваши потенциальные клиенты. Индивидуальный подход к каждому отдельному клиенту - ключевой фактор в работе с целевой аудиторией. Ваш персональный менеджер благодаря мгновенной и эффективной обработке обратной связи будет всегда поддерживать положительное отношение к вашей компании, прорабатывая каждого обратившегося клиента.</p>
								</div>
								<div className="item">
									<h5 className="super">Уникальность и узнаваемость бренда</h5>
									<p>Постоянный мониторинг конкурентов позволяет сформировать уникальный имидж для вашей компании, обеспечив потребителя новым подходом, современным товаром и подходящей ценой.</p>
								</div>
								<div className="item">
									<h5 className="super">Измеримый результат</h5>
									<p>В отличии от наружной рекламы, радио и телевидения, социальные сети способны анализировать каждое событие, касающееся рекламной кампании. В любое время вы сможете отслеживать посещаемость вашей страницы, видеть прирост новых потенциальных клиентов и их вовлечённость. </p>
								</div>
							</div>
						</div>
						<div className="section-actions">
							<button className="button" data-scrollTo=".seventh">Выбрать тарифный план</button>
						</div>
					</div>
				</section>
				<section className="fullpage center seventh">
					<div className="container wide">
						<div className="section-title inverted">
							<h5 className="super">Работайте с нами с выгодой для себя</h5>
							<div className="description">Выберите оптимальный тариф</div>
						</div>
						<div className="section-content">
							<div className="promos">  
						    <div className="promo left">
					        <h5 className="super">База</h5>
					        <ul className="features">
				            <li className="brief spacing">Вконтакте + Фейсбук</li>
				            <li className="price">16 900 руб.</li>
				            <li>Разработка контент-плана</li>
				            <li>Работа копирайтера</li>
				            <li>Фирменный дизайн</li>
				            <li>Обработка обратной связи</li>
				            <li>Мониторинг конкурентов</li>
				            <li>200 клиентов/месяц</li>
				            <li>3 публикации/неделя</li>
				            <li className="buy"><button data-scrollTo=".ten" className="button">Оформить</button></li>   
					        </ul>
						    </div>
						    <div className="promo third scale">
					        <h5 className="super">Премиум</h5>
					        <ul className="features">
				            <li className="brief spacing">Вконтакте + Фейсбук</li>
				            <li className="price">23 900 руб.</li>
				            <li>Разработка контент-плана</li>
				            <li>Работа копирайтера</li>
				            <li>Статья в журнале</li> 
				            <li>Фирменный дизайн</li>
				            <li>Обработка обратной связи</li>
				            <li>Мониторинг конкурентов</li>
				            <li>400 клиентов/месяц</li>
				            <li>7 публикации/неделя</li> 
				            <li>1 конкурс/месяц</li> 
				            <li className="buy"><button data-scrollTo=".ten" className="button">Оформить</button></li> 
					        </ul>
						    </div>  
						    <div className="promo right">
					        <h5 className="super">Стандарт</h5>
					        <ul className="features">
				            <li className="brief spacing">Вконтакте + Фейсбук</li>
				            <li className="price">16 900 руб.</li>
				            <li>Разработка контент-плана</li>
				            <li>Работа копирайтера</li>
				            <li>Фирменный дизайн</li>
				            <li>Обработка обратной связи</li>
				            <li>Мониторинг конкурентов</li>
				            <li>300 клиентов/месяц</li>
				            <li>5 публикации/неделя</li>
				            <li>1 конкурс/месяц</li> 
				            <li className="buy"><button data-scrollTo=".ten" className="button">Оформить</button></li>   
					        </ul>
						    </div>
							</div>
						</div>
						<div className="section-actions">
							<button className="button" data-scrollTo=".ten">Начать работать вместе!</button>
						</div>
					</div>
				</section>
				<section className="center eighth">
					<div className="container">
						<div className="section-title">
							<h5 className="super">Бонус</h5>
							<div className="description">Получите скидку на дополнительный пакет при покупке пакетов</div>
						</div>
						<div className="section-content">
							<div className="positions">
								<div className="position">
									<div className="position-header">
										<img src="img/odnoklassniki-logo.png" alt="Одноклассники" />
										<h4 className="super position-price">2 499 р.</h4>
									</div>
									<div className="position-content">
										<h6 className="position-title super">
											Увеличивайте потребительский спрос в Одноклассниках
										</h6>
									</div>
								</div>
								<div className="position">
									<div className="position-header">
										<img src="img/instagram-logo.png" alt="Инстаграм" />
										<h4 className="super position-price">2 499 р.</h4>
									</div>
									<div className="position-content">
										<h6 className="position-title super">
											Создавайте онлайн-витрину в Инстаграм
										</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="section-actions">
						</div>
					</div>
				</section>
				<section className="center nineth">
					<div className="container">
						<div className="section-title">
							<h5 className="super">Создание контента для рекламной кампании</h5>
							<div className="description">Прокачайте свою рекламную кампанию!</div>
						</div>
						<div className="section-content">
							<p className="primary">Мы предлагаем не только реализацию маркетинговой стратегии по развитию в социальных сетях, но также и помощь создании качественного контента любого формата.</p>
							<div className="promos">  
						    <div className="promo left">
					        <h5 className="super">Мини</h5>
					        <ul className="features">
				            <li className="price">9 900 руб.</li>
				            <li>Видео-репортаж 2 минуты</li>
				            <li>Фотосъемка 10 фото</li>
				            <li>Статья о вас в журнале</li>
				            <li>Продюающий текст под 10 позиций</li>
				            <li className="buy"><button data-scrollTo=".ten" className="button">Оформить</button></li>   
					        </ul>
						    </div>
						    <div className="promo third scale">
					        <h5 className="super">Премиум</h5>
					        <ul className="features">
					        	<li className="brief spacing">Выбор для профессионалов</li>
				            <li className="price">18 900 руб.</li>
				            <li>Видео-репортаж 7 минут</li>
				            <li>Фотосъемка 20 фото</li>
				            <li>Статья о вас в журнале</li>
				            <li>Продюающий текст под 15 позиций</li>
				            <li className="buy"><button data-scrollTo=".ten" className="button">Оформить</button></li> 
					        </ul>
						    </div>  
						    <div className="promo right">
					        <h5 className="super">Стандарт</h5>
					        <ul className="features">
				            <li className="price">13 900 руб.</li>
				            <li>Видео-репортаж 5 минут</li>
				            <li>Фотосъемка 15 фото</li>
				            <li>Статья о вас в журнале</li>
				            <li>Продюающий текст под 13 позиций</li>
				            <li className="buy"><button data-scrollTo=".ten" className="button">Оформить</button></li>   
					        </ul>
						    </div>
							</div>
							<p className="primary">Мы поможем вам в создании качественного контента для ваших идей. Видео, аудио, фото, текст - всё это включает каждый из наших пакетов</p>
						</div>
						<div className="section-actions">
						</div>
					</div>
				</section>
				<section className="center ten fullpage">
					<div className="container text">
						<div className="section-title">
							<h5 className="super">Начните работать с нами сегодня!</h5>
							<div className="description">Заполните форму и мы свяжемся с вами в ближайшее время</div>
						</div>
						<div className="section-content">
							<form onSubmit={(e) => {this.handleSubmit(e, mailTemplate(this.state.message))}} className="fluid" ref={(e) => {this.contactForm = e}}>
								<Field fieldName="spamDetection" onInput={this.updateMessage} defaultValue="" title="Бот?" name="spamDetection" hidden={true} />
								<Field fieldName="Тема сообщения" onInput={this.updateMessage} defaultValue="Новый заказ" title="Тема сообщения" name="subject" type="hidden" />
								<Field fieldName="Имя клиента" onInput={this.updateMessage} title="Здесь ваше имя" name="userName" type="text" />
								<Field fieldName="E-Mail клиента" onInput={this.updateMessage} title="Здесь e-mail" name="userEmail" type="text" />
								<Field fieldName="Мобильный телефон клиента" onInput={this.updateMessage} title="Здесь ваш мобильный (+7)" name="userNumber" type="text" />
								<Field fieldName="Сообщение" onInput={this.updateMessage} title="Дополнительное сообщение.. (не обязательно)" name="userMessage" type="textarea" />
								<input type="submit" className="button" value="Отправить" />
							</form>
							<p className="primary">После отправки сообщения, наш менеджер свяжется с вами сразу же, как это станет возможным</p>
						</div>
						<div className="section-actions">
						</div>
					</div>
				</section>
				<section className="center footer inverted">
					<div className="container text">
						<div className="section-content">
							<span className="spacing"><a href="http://levelupworlds.com">Levelup Worlds</a>, 2017</span>
							<br />
							<span className="spacing">levelupworlds@gmail.com, г. Москва, Пресненская наб., 6, стр. 2</span>
							<br />
							<span className="spacing">(903) 634-69-29</span>
						</div>
						<div className="section-actions">
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const initScrollReveal = (sr) => {
	sr.reveal(".jumbotron-title", {
		duration: 500,
		delay: 200,
		origin: "top"
	});
	sr.reveal(".jumbotron-content", {
		duration: 500,
		delay: 600,
		origin: "top"
	});
	sr.reveal(".jumbotron-actions", {
		duration: 500,
		delay: 100,
		origin: "top"
	});
	sr.reveal(".section-title", {
		duration: 500,
		delay: 300,
		origin: "top"
	});
	sr.reveal("section p.primary", {
		duration: 500,
		delay: 100,
		origin: "bottom"
	}, 300);
	sr.reveal(".intro .item", {
		duration: 500,
		delay: 500,
		origin: "top"
	}, 200);
	sr.reveal(".stages .stage", {
		duration: 500,
		delay: 700,
		origin: "bottom"
	}, 300);
	sr.reveal(".second p.primary", {
		duration: 500,
		delay: 1000,
		origin: "bottom"
	});
	sr.reveal(".section-actions", {
		duration: 500,
		delay: 1400,
		origin: "bottom"
	});
	sr.reveal(".third .advantages .advantage", {
		duration: 500,
		delay: 400,
		origin: "bottom"
	}, 200);
	sr.reveal(".fourth .item", {
		duration: 500,
		delay: 500,
		origin: "bottom"
	}, 200);
	sr.reveal(".fifth .graph", {
		duration: 500,
		delay: 1500,
		origin: "top"
	});
	sr.reveal(".sixth .item", {
		duration: 500,
		delay: 500,
		origin: "top"
	}, 200);
	sr.reveal(".promos .promo", {
		duration: 500,
		delay: 400,
		origin: "top"
	});
	sr.reveal(".promos .promo.scale", {
		duration: 500,
		delay: 100,
		origin: "top"
	});
	sr.reveal(".field", {
		duration: 500,
		delay: 100,
		origin: "top"
	}, 200); 

}

const backgroundWrapperMove = () => {
	if (window.innerWidth > 998) {
		const movementStrength = 25;
		const height = movementStrength / window.innerHeight;
		const width = movementStrength / window.innerWidth;
		const area = document.querySelector('section.first');
		const image = document.querySelector('section.first .section-background img');
		area.addEventListener('mousemove', (e) => {
			const pageX = e.pageX - (window.innerWidth / 2);
  	 const pageY = e.pageY - (window.innerHeight / 2);
   	 const newvalueX = width * pageX * -1 - 25;
  	  const newvalueY = height * pageY * -1 - 50;
  	  image.style.top = newvalueX+"px";
  	  image.style.left = newvalueY+'px'
		})
	}
}

const bindSmoothScrolling = () => {
	const links = document.querySelectorAll('[data-scrollTo]');
	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			smoothScroll(document.querySelector(e.target.dataset.scrollto));
		})
	})
}

export default Index;
