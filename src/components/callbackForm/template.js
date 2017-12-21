const renderList = data => Object.keys(data).map(item =>
	`<li><b>${item}</b>: ${data[item]}</li>`);

export default data =>
	`<html>
		<style>.title h2 {margin-bottom:0px;}.title p {margin-top:0px;}.list {margin-top:0px;padding-top:0px;}</style>
		<body>
			<div class="title">
				<h2>Появилась новая заявка на обратный звонок на сайте smm.levelupworlds.com</h2>
				<p>Обработайте данную заявку и обязательно свяжитесь с клиентом, которые оставил следующие данные</p>
			</div>
			<ul class="list"> 
				${renderList(data)} 
			</ul>
		</body>
	</html>`;
