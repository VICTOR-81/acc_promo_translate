document.addEventListener('DOMContentLoaded', function () {
	var quiz_data = {
		registerType: '',
		personal: '',
		seal: '',
		contact: {
			context: 'phone_call',
		},
		price: '',
	};

	var personally, remotely, you_will_have;

	var lang = document.documentElement.lang;

	if (lang === 'en') {
		remotely = {
			individual_entrepreneur: [
				'Preparation of a draft power of attorney. (1 day)',
				'Notarization. (1-3 days)',
				'Legalization or Apostille (1-3 days if necessary)',
				'Sending and receiving (5-10 days)',
				'Translation into Georgian (2 days)',
				'Submission of an application to the Public Registry for the IP to be registered and payment of the necessary fees + obtaining a registration certificate at the House of Justice; (1 day)',
				'Registration of IP in the tax office. (1 day)',
				'Opening a bank account.',
			],
			ooo_virtual: [
				'Preparation of a draft power of attorney and the Charter. (1 day)',
				'Notarization. (1-3 days)',
				'Legalization or Apostille. (1-3 days)',
				'Sending and receiving. (5-10 days)',
				'Translation into Georgian. (2 days)',
				'Submission of an application to the Public Register for the company to be registered and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Obtaining a power of attorney for the director to open a bank account (1 day)',
				'Opening a bank account. (1 day)',
				'Electronic application submission Ministry of Finance. (10 days)',
				'Submission of updated information in electronic form. (1-5 days)',
				'Consideration of submitted and revised documentation. (15-30 days)',
				'Obtaining a certificate of status of the Virtual Zone. (1 day)',
			],
			ao: [
				'Preparation of a draft power of attorney and the Charter. (1 day)',
				'Notarization. (1-3 days)',
				'Legalization or Apostille. (1-3 days)',
				'Sending and receiving. (5-10 days)',
				'Translation into Georgian. (2 days)',
				'Submission of an application to the Public Register for the company to be registered and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Obtaining a power of attorney for the director to open a bank account (1 day)',
				'Opening a bank account. (3 days)',
			],
			nko: [
				'Preparation of a draft power of attorney and the Charter. (1 day)',
				'Notarization. (1-3 days)',
				'Legalization or Apostille. (1-3 days)',
				'Sending and receiving. (5-10 days)',
				'Translation into Georgian. (2 days)',
				'Submission of an application to the Public Register to register an organization, and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Obtaining a power of attorney for the director to open a bank account (1 day)',
				'Opening a bank account. (3 days)',
			],
			ooo: [
				'Preparation of a draft power of attorney and the Charter. (1 day)',
				'Notarization. (1-3 days)',
				'Legalization or Apostille. (1-3 days if needed)',
				'Sending and receiving. (5-10 days)',
				'Translation into Georgian. (2 days)',
				'Submission of an application to the Public Register to register a company, and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Obtaining a power of attorney for the director to open a bank account (1 day)',
				'Opening a bank account. (3 days)',
			],
			mk: [
				'Preparation of a draft power of attorney and the Charter. (1 day)',
				'Notarization. (1-3 days)',
				'Legalization or Apostille. (1-3 days)',
				'Sending and receiving. (5-10 days)',
				'Translation into Georgian. (2 days)',
				'Submission of an application to the Public Register for the company to be registered and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Obtaining a power of attorney for the director to open a bank account (1 day)',
				'Opening a bank account. (1 day)',
				'Submission of the application in physical format to the Ministry of Finance. (10 days)',
				'Submission of updated information in physical format. (1-5 days)',
				'Consideration of submitted and revised documentation. (15-30 days)',
				'Obtaining a certificate of status of the Virtual Zone. (1 day)',
			],
		};
		personally = {
			individual_entrepreneur: ['Be present in person with a passport.'],
			ooo_virtual: [
				'Preparation of the Charter. (1 day)',
				'Submission of an application to the Public Registry for the company to be registered and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Opening a bank account. (1 day)',
				'Submission of the application electronically Ministry of Finance. (10 days)',
				'Submission of updated information in electronic form. (1-5 days)',
				'Consideration of submitted and revised documentation. (15-30 days)',
				'Obtaining a certificate of status of the Virtual Zone. (1 day)',
			],
			ao: [
				'Preparation of a draft power of attorney. Charter preparation (1 day)',
				'Submission of an application to the Public Registry for the company to be registered and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Opening a bank account. (1 day)',
			],
			nko: [
				'Preparation of a draft power of attorney. Charter preparation (1 day)',
				'Submission of an application to the Public Register to register an organization, and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Opening a bank account. (1 day)',
			],
			ooo: [
				'Preparation of a draft power of attorney. Charter preparation (1 day)',
				'Submission of an application to the Public Registry for the company to be registered and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Opening a bank account. (1 day)',
			],
			mk: [
				'Preparation of the Charter. (1 day)',
				'Notarization. (1-3 days)',
				'Legalization or Apostille. (1-3 days)',
				'Sending and receiving. (5-10 days)',
				'Translation into Georgian. (2 days)',
				'Submission of an application to the Public Register for the company to be registered and payment of the necessary fees + obtaining a registration certificate at the House of Justice. (1 day)',
				'Registration of the company in the tax office. (1 day)',
				'Opening a bank account. (1 day)',
				'Submission of the application in physical format to the Ministry of Finance. (10 days)',
				'Submission of updated information in physical format. (1-5 days)',
				'Consideration of submitted and revised documentation. (15-30 days)',
				'Obtaining a certificate of status of the Virtual Zone. (1 day)',
			],
		};
		you_will_have = {
			individual_entrepreneur: [
				['IE status and Georgian bank account', 'Preferential form of taxation - individual entrepreneur with a small status'],
				['Access to international payment systems', 'Paypal, Transferwise, Payoneer etc'],
				[
					'Payment of taxes will be carried out according to a simplified system',
					'With a turnover of up to 500.000 lari / calendar year (about 160.000 USD) 1% of the turnover is paid',
				],
				[
					'All financial transactions can be carried out remotely',
					'Most banks in Georgia allow you to make payments and receive cash using corporate cards in any country in the world.',
				],
				[
					'Data about your accounts in Georgia is not transferred to CRS',
					'It is a single global standard for reporting financial accounts for tax purposes, allowing regulators to obtain full details of the taxes of an entity on request and provides an additional opportunity for entrepreneurs and ordinary people to protect their assets.',
				],
				[
					'No double taxation when dealing with 57 countries',
					'With this form of business, you can save significantly on taxes in your country of residence by taking advantage of the double tax treaty.',
				],
			],
			ooo_virtual: [
				[
					'Registered company ready for legal activity in Georgia and an account in a Georgian bank',
					'Companies with the status of a virtual zone of Georgia are taxed under a preferential system, which allows the IT software development business to develop faster and more efficiently.',
				],
				['Access to international payment systems', 'Paypal, Transferwise, Payoneer'],
				[
					'Tax accounting will take place according to the Estonian accrual system',
					'5% tax on withdrawn dividends and income tax in case of payment of salaries',
				],
				[
					'All financial transactions can be carried out remotely',
					'Most banks in Georgia allow you to make payments and receive cash using corporate cards in any country in the world.',
				],
				[
					'Data about your accounts in Georgia is not transferred to CRS',
					'It is a single global standard for reporting financial accounts for tax purposes, allowing regulators to obtain full details of the taxes of an entity on request and provides an additional opportunity for entrepreneurs and ordinary people to protect their assets.',
				],
				[
					'No double taxation when dealing with 57 countries',
					'With this form of business, you can save significantly on taxes in your country of residence by taking advantage of the double tax treaty.',
				],
			],
			ao: [
				[
					'Registered joint stock company and Georgian bank account',
					'In a Joint Stock Company in Georgia, the authorized capital is divided into shares and shareholders can issue shares of various types in order to increase their capital.',
				],
				['Access to international payment systems', 'Paypal, Transferwise, Payoneer'],
				[
					'Tax accounting will take place according to the Estonian accrual system',
					'When paying dividends to shareholders, a 15 percent income tax + 5% dividends are paid.',
				],
				[
					'All financial transactions can be carried out remotely',
					'Most banks in Georgia allow you to make payments and receive cash using corporate cards in any country in the world.',
				],
				[
					'Data about your accounts in Georgia is not transferred to CRS',
					'It is a single global standard for reporting financial accounts for tax purposes, allowing regulators to obtain full details of the taxes of an entity on request and provides an additional opportunity for entrepreneurs and ordinary people to protect their assets.',
				],
				[
					'No double taxation when dealing with 57 countries',
					'With this form of business, you can save significantly on taxes in your country of residence by taking advantage of the double tax treaty.',
				],
			],
			nko: [
				[
					'A non-profit organization and an account in a Georgian bank are registered',
					'The status of NGOs in Georgia is given to organizations whose main goal is not to make a profit and distribute it among partners.',
				],
				['Access to international payment systems', 'Paypal, Transferwise, Payoneer'],
				[
					'Everything except profits is taxed at regular rates.',
					'NCOs can engage in entrepreneurial activities, generate profits that will be used for the purposes of the organization.',
				],
				[
					'All financial transactions can be carried out remotely',
					'Most banks in Georgia allow you to make payments and receive cash using corporate cards in any country in the world.',
				],
				[
					'Data about your accounts in Georgia is not transferred to CRS',
					'It is a single global standard for reporting financial accounts for tax purposes, allowing regulators to obtain full details of the taxes of an entity on request and provides an additional opportunity for entrepreneurs and ordinary people to protect their assets.',
				],
				[
					'No double taxation when dealing with 57 countries',
					'With this form of business, you can save significantly on taxes in your country of residence by taking advantage of the double tax treaty.',
				],
			],
			ooo: [
				[
					'Registered company ready for legal activity in Georgia and an account in a Georgian bank',
					'The most popular form of doing business in the country, about 98% of legal entities act in the form of a Limited Liability Company.',
				],
				['Access to international payment systems', 'Paypal, Transferwise, Payoneer'],
	
				[
					'Tax accounting will take place according to the Estonian accrual system',
					'The taxable profit of the enterprise is taxed at the rate of 15 percent in case of profit distribution + 5% for dividends..',
				],
				[
					'All financial transactions can be carried out remotely',
					'Most banks in Georgia allow you to make payments and receive cash using corporate cards in any country in the world.',
				],
				[
					'Data about your accounts in Georgia is not transferred to CRS',
					'It is a single global standard for reporting financial accounts for tax purposes, allowing regulators to obtain full details of the taxes of an entity on request and provides an additional opportunity for entrepreneurs and ordinary people to protect their assets.',
				],
				[
					'No double taxation when dealing with 57 countries',
					'With this form of business, you can save significantly on taxes in your country of residence by taking advantage of the double tax treaty.',
				],,
			],
			mk: [
				[
					'Registered company ready for legal activity in Georgia and an account in a Georgian bank',
					'International companies in Georgia will be partially exempt from property tax and will be able to reduce the corporate income tax base',
				],
				['Access to international payment systems', 'Paypal, Transferwise, Payoneer'],
				[
					'Preferential tax rate',
					'International companies will pay only 5% of withdrawn profits (do not forget that Georgia has an Estonian capital reinvestment model, there is no mandatory monthly payment) and 5% on salary payments, which significantly reduces the tax burden on businesses.',
				],
				[
					'All financial transactions can be carried out remotely',
					'Most banks in Georgia allow you to make payments and receive cash using corporate cards in any country in the world.',
				],
				[
					'Data about your accounts in Georgia is not transferred to CRS',
					'It is a single global standard for reporting financial accounts for tax purposes, allowing regulators to obtain full details of the taxes of an entity on request and provides an additional opportunity for entrepreneurs and ordinary people to protect their assets.',
				],
				[
					'No double taxation when dealing with 57 countries',
					'With this form of business, you can save significantly on taxes in your country of residence by taking advantage of the double tax treaty.',
				],
			],
		};
		function toggleWarningAboutRussiaAndBelarus() {
			const warning_message = document.querySelector('#temp_warning_RB');
			if (warning_message) {
				warning_message.remove();
			}
			var message;
			switch (quiz_data.registerType.name) {
				case 'individual_entrepreneur':
					message = 'From 03/01/2022, for citizens of the Russian Federation and the Republic of Belarus, the consideration of an application for registration of an individual entrepreneur has been extended to 30 days.';
					personal_container.innerHTML += '<h1 id="temp_warning_RB">' + message + '</h1>';
	
					break;
				case 'ooo':
					message =
						'From 03/01/2022, for citizens of the Russian Federation and the Republic of Belarus, the consideration of an application for registration of companies has been extended to 30 days. Companies where the founder and/or non-resident director do not open corporate accounts without a residence permit.';
					personal_container.innerHTML += '<h1 id="temp_warning_RB">' + message + '</h1>';
	
					break;
				default:
					message = '';
					break;
			}
		}

		function implementOpenSteps() {
			var type = quiz_data.registerType.name;
			var remote;
			var final__open_array;
			quiz_data.personal === 'true' ? (remote = personally) : (remote = remotely);
	
			switch (type) {
				case 'individual_entrepreneur':
					final__open_array = remote.individual_entrepreneur;
					open_steps_title.innerText = `To open an IE ${quiz_data.personal === 'true' ? '' : 'remotely'} you need:`;
					break;
				case 'ooo_virtual':
					final__open_array = remote.ooo_virtual;
					open_steps_title.innerText = `To ${quiz_data.personal === 'true' ? '' : 'remotely'} open an LLC with the status of a virtual zone you need:`;
					break;
				case 'ao':
					final__open_array = remote.ao;
					open_steps_title.innerText = `To open an AO ${quiz_data.personal === 'true' ? '' : 'remotely'} you need:`;
					break;
				case 'nko':
					final__open_array = remote.nko;
					open_steps_title.innerText = `To open an NPO ${quiz_data.personal === 'true' ? '' : 'remotely'} you need:`;
					break;
				case 'ooo':
					final__open_array = remote.ooo;
					open_steps_title.innerText = `To open an LLC ${quiz_data.personal === 'true' ? '' : 'remotely'} you need:`;
					break;
				case 'mk':
					final__open_array = remote.mk;
					open_steps_title.innerText = `To open an international company ${quiz_data.personal === 'true' ? '' : 'remotely'} you need:`;
					break;
			}
			open_steps_text.innerHTML = '';
	
			final__open_array.forEach((string, i) => {
				open_steps_text.innerHTML += `<p>${i + 1}. ${string}</p>`;
			});
		}

		function implementResults() {
			var type = quiz_data.registerType.name;
			var remote;
			var final__open_array;
			quiz_data.personal === 'true' ? (remote = personally) : (remote = remotely);
	
			switch (type) {
				case 'individual_entrepreneur':
					final__open_array = you_will_have.individual_entrepreneur;
					you_want_to.innerText = `You want to open an IE ${quiz_data.personal === 'true' ? '' : 'remotely'} with a business card ${
						quiz_data.seal === 'yes' ? 'and a seal' : ''
					}`;
					sum_h2.innerText = 'After opening the IE, you will have';
					break;
				case 'ooo_virtual':
					final__open_array = you_will_have.ooo_virtual;
					you_want_to.innerText = `You want to open an LLC with a virtual zone ${quiz_data.personal === 'true' ? '' : 'remotely'} with a business card ${
						quiz_data.seal === 'yes' ? 'and a seal' : ''
					}`;
					sum_h2.innerText = 'After opening an LLC with a virtual zone, you will have';
					break;
				case 'ao':
					final__open_array = you_will_have.ao;
					you_want_to.innerText = `You want to open JSC ${quiz_data.personal === 'true' ? '' : 'remotely'} with a business card ${
						quiz_data.seal === 'yes' ? 'and a seal' : ''
					}`;
					sum_h2.innerText = 'After opening the JSC, you will have';
					break;
				case 'nko':
					final__open_array = you_will_have.nko;
					you_want_to.innerText = `You want to open an NPO ${quiz_data.personal === 'true' ? '' : 'remotely'} with a business card ${
						quiz_data.seal === 'yes' ? 'and a seal' : ''
					}`;
					sum_h2.innerText = 'After opening the NPO, you will have';
					break;
				case 'ooo':
					final__open_array = you_will_have.ooo;
					you_want_to.innerText = `You want to open an LLC ${quiz_data.personal === 'true' ? '' : 'remotely'} with a business card ${
						quiz_data.seal === 'yes' ? 'and a seal' : ''
					}`;
					sum_h2.innerText = 'After opening an LLC, you will have';
					break;
				case 'mk':
					final__open_array = you_will_have.mk;
					you_want_to.innerText = `You want to open an international company ${quiz_data.personal === 'true' ? '' : 'remotely'} with a business card ${
						quiz_data.seal === 'yes' ? 'and a seal' : ''
					}`;
					sum_h2.innerText = 'After opening an International Company, you will have';
					break;
			}
			questions_list.innerHTML = '';
	
			final__open_array.forEach((string) => {
				questions_list.innerHTML += `<div class="label_width_question">${string[0]} <img src="images/icons/blue_question_icon.svg" alt="" onclick="showHint('${string[0]}', '${string[1]}')" ></div>`;
			});
		}

		function handleQUizGrids(e) {
			if (e.target.dataset.value) {
				for (var i = 0; i < e.target.parentElement.children.length; i++) {
					e.target.parentElement.children[i].classList.remove('quiz_grid_element-active');
				}
	
				e.target.classList.add('quiz_grid_element-active');
				forwardBlocked = false;
				next_slide.classList.remove('inactive_quiz_button');
	
				if (current_slide < 1) {
					console.log(quiz_data);
					priceList[0].forEach((el) => {
						if (el.name === e.target.dataset.value) {
							quiz_data.registerType = el;
						}
	
						if (e.target.dataset.value === 'individual_entrepreneur') {
							slides[2].querySelector('h2').innerText =
								'Do you need training in filling out a declaration for an individual entrepreneur (in English, Russian). After the first active month.? (+100$ to cost)';
							priceList[2][0].price = 100;
							if (quiz_data.seal === 'yes') {
								implementPrice(priceList[2][0].price, '+');
							}
						} else {
							slides[2].querySelector('h2').innerText = 'Do you need a company seal? (+80$ to the cost)';
							priceList[2][0].price = 80;
							if (quiz_data.seal === 'yes') {
								implementPrice(priceList[2][0].price, '+');
							}
						}
	
						if (quiz_data.personal == 'false') {
							implementPrice(quiz_data.registerType.remote_price, 'refresh');
						} else if (quiz_data.personal == 'true' || quiz_data.personal == '') {
							implementPrice(quiz_data.registerType.price, 'refresh');
						}
					});
	
					slide_tracker[0] = 'action done';
				}
	
				if (current_slide > 0) {
					if (e.target.dataset.value == 'false') {
						implementPrice(quiz_data.registerType.remote_price, 'refresh');
					} else if (e.target.dataset.value == 'true') {
						implementPrice(quiz_data.registerType.price, 'refresh');
					}
					quiz_data.personal = e.target.dataset.value;
					slide_tracker[1] = 'action done';
				}
			}
		}

		function handleSlide(direction) {
			if (direction === 'forward' && !forwardBlocked) {
				if (current_slide < 4) {
					current_slide++;
					if (current_slide > furthest_slide) {
						furthest_slide++;
					}
	
					locked_price[current_slide] = price_counter;
	
					slides[current_slide - 1].classList.remove('current_slide');
	
					setTimeout(() => {
						slides[current_slide - 1].classList.remove('slide_aligned');
					}, 100);
					slides[current_slide].classList.add('slide_aligned');
					setTimeout(() => {
						slides[current_slide].classList.add('current_slide');
					}, 100);
	
					if (current_slide === slides.length - 2) {
						final_price.innerText = `Total cost - $${price_counter + printing}`;
						slide_tracker[3] = 'action done';
					} else if (current_slide === slides.length - 1) {
						document.querySelector('.quiz_buttons_container').style.display = 'none';
					}
	
					current_slide < furthest_slide ? (forwardBlocked = false) : (forwardBlocked = true);
	
					if (current_slide === 1) {
						toggleWarningAboutRussiaAndBelarus();
					}
					if (current_slide === 2) {
						implementOpenSteps();
					} else if (current_slide === 3) {
						implementResults();
					}
	
					if (slide_tracker[current_slide] === 'action done') {
						forwardBlocked = false;
					}
				}
			} else if (direction === 'backwards') {
				if (current_slide > 0) {
					current_slide--;
	
					slides[current_slide + 1].classList.remove('current_slide');
					setTimeout(() => {
						slides[current_slide + 1].classList.remove('slide_aligned');
					}, 100);
	
					setTimeout(() => {
						slides[current_slide].classList.add('slide_aligned');
						setTimeout(() => {
							slides[current_slide].classList.add('current_slide');
						}, 40);
					}, 110);
	
					locked_price.pop();
					if (locked_price.length < 1) {
						locked_price[0] = 0;
					}
					forwardBlocked = false;
				}
			}
			forwardBlocked ? next_slide.classList.add('inactive_quiz_button') : next_slide.classList.remove('inactive_quiz_button');
			handleNumbers();
			if (current_slide < 4) {
				step.innerHTML = `${current_slide + 1} step`;
			}
		}

	} else if (lang === 'ru') {

		 remotely = {
			individual_entrepreneur: [
				'Подготовка проекта доверенности. (1 день)',
				'Нотариальное заверение. (1-3 дня)',
				'Легализация или Апостилирование (1-3 дня в случае надобности)',
				'Отправка и получение (5-10 дней)',
				'Перевод на грузинский язык (2 дня)',
				'Подача заявления в Публичный реестр, чтобы ИП была зарегистрирована и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции; (1 день)',
				'Регистрация ИП в налоговой инспекции. (1 день)',
				'Открытие расчетного счета в банке. ',
			],
			ooo_virtual: [
				'Подготовка проекта доверенности и Устава. (1 день)',
				'Нотариальное заверение. (1-3 дня)',
				'Легализация или Апостилирование. (1-3 дня)',
				'Отправка и получение. (5-10 дней)',
				'Перевод на грузинский язык. (2 дня)',
				'Подача заявления в Публичный реестр, чтобы фирма была зарегистрирована и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Получение доверенности на директора для открытия счета в банке (1 день)',
				'Открытие расчетного счета в банке. (1 день)',
				'Подача заявки в электронном виде Министерство финансов. (10 дней)',
				'Подача уточненной информации в электронном виде. (1-5 дней)',
				'Рассмотрение поданной и уточненной документации. (15-30 дней)',
				'Получение сертификата статуса Виртуальной зоны. (1 день)',
			],
			ao: [
				'Подготовка проекта доверенности и Устава. (1 день)',
				'Нотариальное заверение. (1-3 дня)',
				'Легализация или Апостилирование. (1-3 дня)',
				'Отправка и получение. (5-10 дней)',
				'Перевод на грузинский язык. (2 дня)',
				'Подача заявления в Публичный реестр, чтобы фирма была зарегистрирована и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Получение доверенности на директора для открытия счета в банке (1 день)',
				'Открытие расчетного счета в банке. (3 дня)',
			],
			nko: [
				'Подготовка проекта доверенности и Устава. (1 день)',
				'Нотариальное заверение. (1-3 дня)',
				'Легализация или Апостилирование. (1-3 дня)',
				'Отправка и получение. (5-10 дней)',
				'Перевод на грузинский язык. (2 дня)',
				'Подача заявления в Публичный реестр, для регистрации организации, и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Получение доверенности на директора для открытия счета в банке (1 день)',
				'Открытие расчетного счета в банке. (3 дня)',
			],
			ooo: [
				'Подготовка проекта доверенности и Устава. (1 день)',
				'Нотариальное заверение. (1-3 дня)',
				'Легализация или Апостилирование. (1-3 дня в случае надобности)',
				'Отправка и получение. (5-10 дней)',
				'Перевод на грузинский язык. (2 дня)',
				'Подача заявления в Публичный реестр,для регистрации компании, и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Получение доверенности на директора для открытия счета в банке (1 день)',
				'Открытие расчетного счета в банке. (3 дня)',
			],
			mk: [
				'Подготовка проекта доверенности и Устава. (1 день)',
				'Нотариальное заверение. (1-3 дня)',
				'Легализация или Апостилирование. (1-3 дня)',
				'Отправка и получение. (5-10 дней) ',
				'Перевод на грузинский язык. (2 дня)',
				'Подача заявления в Публичный реестр, чтобы фирма была зарегистрирована и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Получение доверенности на директора для открытия счета в банке (1 день)',
				'Открытие расчетного счета в банке. (1 день)',
				'Подача заявки в физическом формате в Министерство финансов. (10 дней)',
				'Подача уточненной информации в физическом формате. (1-5 дней)',
				'Рассмотрение поданной и уточненной документации. (15-30 дней)',
				'Получение сертификата статуса Виртуальной зоны. (1 день)',
			],
		};
		personally = {
			individual_entrepreneur: ['Присутствовать лично с загранпаспортом.'],
			ooo_virtual: [
				'Подготовка  Устава. (1 день)',
				'Подача заявления в Публичный реестр, чтобы фирма была зарегистрирована и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Открытие расчетного счета в банке. (1 день)',
				'Подача заявки в электронном виде Министерство финансов. (10 дней)',
				'Подача уточненной информации в электронном виде. (1-5 дней)',
				'Рассмотрение поданной и уточненной документации. (15-30 дней)',
				'Получение сертификата статуса Виртуальной зоны. (1 день)',
			],
			ao: [
				'Подготовка проекта доверенности. Подготовка устава. (1 день)',
				'Подача заявления в Публичный реестр, чтобы фирма была зарегистрирована и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Открытие расчетного счета в банке. (1 день)',
			],
			nko: [
				'Подготовка проекта доверенности. Подготовка устава (1 день)',
				'Подача заявления в Публичный реестр, для регистрации организации, и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Открытие расчетного счета в банке. (1 день)',
			],
			ooo: [
				'Подготовка проекта доверенности. Подготовка устава (1 день)',
				'Подача заявления в Публичный реестр, чтобы фирма была зарегистрирована и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Открытие расчетного счета в банке. (1 день)',
			],
			mk: [
				'Подготовка  Устава. (1 день)',
				'Нотариальное заверение. (1-3 дня)',
				'Легализация или Апостилирование. (1-3 дня)',
				'Отправка и получение. (5-10 дней)',
				'Перевод на грузинский язык. (2 дня)',
				'Подача заявления в Публичный реестр, чтобы фирма была зарегистрирована и оплата необходимых пошлин + получение регистрационного свидетельства в Доме Юстиции. (1 день)',
				'Регистрация компании в налоговой инспекции. (1 день)',
				'Открытие расчетного счета в банке. (1 день)',
				'Подача заявки в физическом формате в Министерство финансов. (10 дней)',
				'Подача уточненной информации в физическом формате. (1-5 дней)',
				'Рассмотрение поданной и уточненной документации. (15-30 дней)',
				'Получение сертификата статуса Виртуальной зоны. (1 день)',
			],
		};
		you_will_have = {
			individual_entrepreneur: [
				['Статус ИП и счет в грузинском банке', 'Льготная форма налогообложения — ИП с малым статусом'],
				['Доступ к международным платежным системам', 'Paypal, Transferwise, Payoneer и т.д'],
				[
					'Оплата налогов будет происходить по упрощенной системе',
					'При обороте до 500.000 лари/ календарный год (около 160.000 USD) платится 1% с оборота',
				],
				[
					'Все финансовые операции можно проводить удаленно',
					'Большинство банков Грузии позволяет производить платежи и получать наличные средства с использованием корпоративных карт в любой стране мира.',
				],
				[
					'Данные о ваших счетах в Грузии не передаются в CRS',
					' Это единый мировой стандарт отчетности о финансовых счетах в налоговых целях, позволяющий контролирующим органам по запросу получать полные сведения о налогах того или иного субъекта и дает дополнительную возможность предпринимателям и обычным людям защитить свои активы',
				],
				[
					'Нет двойного налогообложения при работе с 57 странами',
					'С помощью такой формы ведения бизнеса вы можете значительно сэкономить на налогах в вашей стране резидентства, воспользовавшись соглашением об избежании двойного налогообложения.',
				],
			],
			ooo_virtual: [
				[
					'Зарегистрированная компания готовая к легальной деятельности в Грузии и счет в грузинском банке',
					'Компании со статусом виртуальной зоны Грузии облагаются налогами по льготной системе, что позволяет IT бизнесу по разработке программного обеспечения быстрее и эффективнее развиваться.',
				],
				['Доступ к международным платежным системам', 'Paypal, Transferwise, Payoneer'],
				[
					'Учет налогов будет происходить по эстонской системе начисления',
					'5% налога с выведенных дивидендов и подоходный налог в случае выплаты заработных плат',
				],
				[
					'Все финансовые операции можно проводить удаленно',
					'Большинство банков Грузии позволяет производить платежи и получать наличные средства с использованием корпоративных карт в любой стране мира.',
				],
				[
					'Данные о ваших счетах в Грузии не передаются в CRS',
					'Это единый мировой стандарт отчетности о финансовых счетах в налоговых целях, позволяющий контролирующим органам по запросу получать полные сведения о налогах того или иного субъекта и дает дополнительную возможность предпринимателям и обычным людям защитить свои активы.',
				],
				[
					'Нет двойного налогообложения при работе с 57 странами',
					'С помощью такой формы ведения бизнеса вы можете значительно сэкономить на налогах в вашей стране резидентства, воспользовавшись соглашением об избежании двойного налогообложения.',
				],
			],
			ao: [
				[
					'Зарегистрированное акционерное общество и счет в грузинском банке',
					'У Акционерного общества в Грузии уставной капитал поделен на доли и акционеры могут выпускать акции разных типов, чтобы увеличивать свой капитал.',
				],
				['Доступ к международным платежным системам', 'Paypal, Transferwise, Payoneer'],
				[
					'Учет налогов будет происходить по эстонской системе начисления',
					'При выплате дивидендов акционерам платится налог на прибыль 15 процентов +5% дивиденды.',
				],
				[
					'Все финансовые операции можно проводить удаленно',
					'Большинство банков Грузии позволяет производить платежи и получать наличные средства с использованием корпоративных карт в любой стране мира.',
				],
				[
					'Данные о ваших счетах в Грузии не передаются в CRS',
					'Это единый мировой стандарт отчетности о финансовых счетах в налоговых целях, позволяющий контролирующим органам по запросу получать полные сведения о налогах того или иного субъекта и дает дополнительную возможность предпринимателям и обычным людям защитить свои активы.',
				],
				[
					'Нет двойного налогообложения при работе с 57 странами',
					'С помощью такой формы ведения бизнеса вы можете значительно сэкономить на налогах в вашей стране резидентства, воспользовавшись соглашением об избежании двойного налогообложения.',
				],
			],
			nko: [
				[
					'Зарегистрирована некоммерческая организация и счет в грузинском банке',
					'Статус НКО в Грузии имеют организации основная цель которых не получение прибыли и ее распределение между партнерами.',
				],
				['Доступ к международным платежным системам', 'Paypal, Transferwise, Payoneer'],
				[
					'Все кроме прибыли облагается налогом по обычным ставкам',
					'НКО могут заниматься предпринимательской деятельностью, генерировать прибыль, которая будет использоваться для целей организации.',
				],
				[
					'Все финансовые операции можно проводить удаленно',
					'Большинство банков Грузии позволяет производить платежи и получать наличные средства с использованием корпоративных карт в любой стране мира.',
				],
				[
					'Данные о ваших счетах в Грузии не передаются в CRS',
					'Это единый мировой стандарт отчетности о финансовых счетах в налоговых целях, позволяющий контролирующим органам по запросу получать полные сведения о налогах того или иного субъекта и дает дополнительную возможность предпринимателям и обычным людям защитить свои активы.',
				],
				[
					'Нет двойного налогообложения при работе с 57 странами',
					'С помощью такой формы ведения бизнеса вы можете значительно сэкономить на налогах в вашей стране резидентства, воспользовавшись соглашением об избежании двойного налогообложения.',
				],
			],
			ooo: [
				[
					'Зарегистрированная компания готовая к легальной деятельности в Грузии и счет в грузинском банке',
					'Самая популярная форма ведения бизнеса в стране, около 98% юридических лиц выступают именно в форме Общества с ограниченной ответственностью.',
				],
				['Доступ к международным платежным системам', 'Paypal, Transferwise, Payoneer'],
	
				[
					'Учет налогов будет происходить по эстонской системе начисления',
					'Подлежащая налогообложению прибыль предприятия облагается налогом по ставке 15 процентов в случае распределения прибыли + 5% на дивиденды.',
				],
				[
					'Все финансовые операции можно проводить удаленно',
					'Большинство банков Грузии позволяет производить платежи и получать наличные средства с использованием корпоративных карт в любой стране мира.',
				],
				[
					'Данные о ваших счетах в Грузии не передаются в CRS',
					'Это единый мировой стандарт отчетности о финансовых счетах в налоговых целях, позволяющий контролирующим органам по запросу получать полные сведения о налогах того или иного субъекта и дает дополнительную возможность предпринимателям и обычным людям защитить свои активы.',
				],
				[
					'Нет двойного налогообложения при работе с 57 странами',
					'С помощью такой формы ведения бизнеса вы можете значительно сэкономить на налогах в вашей стране резидентства, воспользовавшись соглашением об избежании двойного налогообложения.',
				],
			],
			mk: [
				[
					'Зарегистрированная компания готовая к легальной деятельности в Грузии и счет в грузинском банке',
					'Международные компании в Грузии будут частично освобождены от налога на имущество и смогут уменьшить базу корпоративного подоходного налога',
				],
				['Доступ к международным платежным системам', 'Paypal, Transferwise, Payoneer'],
				[
					'Льготная налоговая ставка',
					'Международные компании будут платить только 5% с выведенной прибыли (не забывайте о том, что в Грузии действует эстонская модель реинвестирования капитала, обязательного ежемесячного платежа нет) и 5% при выплате заработных плат, что существенно снижает налоговую нагрузку на бизнес.',
				],
				[
					'Все финансовые операции можно проводить удаленно',
					'Большинство банков Грузии позволяет производить платежи и получать наличные средства с использованием корпоративных карт в любой стране мира.',
				],
				[
					'Данные о ваших счетах в Грузии не передаются в CRS',
					'Это единый мировой стандарт отчетности о финансовых счетах в налоговых целях, позволяющий контролирующим органам по запросу получать полные сведения о налогах того или иного субъекта и дает дополнительную возможность предпринимателям и обычным людям защитить свои активы.',
				],
				[
					'Нет двойного налогообложения при работе с 57 странами',
					'С помощью такой формы ведения бизнеса вы можете значительно сэкономить на налогах в вашей стране резидентства, воспользовавшись соглашением об избежании двойного налогообложения.',
				],
			],
		};
		function toggleWarningAboutRussiaAndBelarus() {
			const warning_message = document.querySelector('#temp_warning_RB');
			if (warning_message) {
				warning_message.remove();
			}
			var message;
			switch (quiz_data.registerType.name) {
				case 'individual_entrepreneur':
					message = 'С 01.03.2022 для граждан Российской Федерации и Республики Беларусь рассмотрение заявки на регистрацию ИП продлили до 30 дней.';
					personal_container.innerHTML += '<h1 id="temp_warning_RB">' + message + '</h1>';
	
					break;
				case 'ooo':
					message =
						'С 01.03.2022 для граждан Российской Федерации и Республики Беларусь рассмотрение заявки на регистрацию компаниям продлили до 30 дней. Компаниям, где учредитель и/или директор нерезидент не открывают корпоративные счета без ВНЖ.';
					personal_container.innerHTML += '<h1 id="temp_warning_RB">' + message + '</h1>';
	
					break;
				default:
					message = '';
					break;
			}
		}

		function implementOpenSteps() {
			var type = quiz_data.registerType.name;
			var remote;
			var final__open_array;
			quiz_data.personal === 'true' ? (remote = personally) : (remote = remotely);
	
			switch (type) {
				case 'individual_entrepreneur':
					final__open_array = remote.individual_entrepreneur;
					open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия ИП нужно:`;
					break;
				case 'ooo_virtual':
					final__open_array = remote.ooo_virtual;
					open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия ООО со статусом виртуальной зоны нужно:`;
					break;
				case 'ao':
					final__open_array = remote.ao;
					open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия AО нужно:`;
					break;
				case 'nko':
					final__open_array = remote.nko;
					open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия НКО нужно:`;
					break;
				case 'ooo':
					final__open_array = remote.ooo;
					open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия ООО нужно:`;
					break;
				case 'mk':
					final__open_array = remote.mk;
					open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия международной компании нужно:`;
					break;
			}
			open_steps_text.innerHTML = '';
	
			final__open_array.forEach((string, i) => {
				open_steps_text.innerHTML += `<p>${i + 1}. ${string}</p>`;
			});
		}

		function implementResults() {
			var type = quiz_data.registerType.name;
			var remote;
			var final__open_array;
			quiz_data.personal === 'true' ? (remote = personally) : (remote = remotely);
	
			switch (type) {
				case 'individual_entrepreneur':
					final__open_array = you_will_have.individual_entrepreneur;
					you_want_to.innerText = `Вы хотите открыть ИП ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
						quiz_data.seal === 'yes' ? 'и печатью' : ''
					}`;
					sum_h2.innerText = 'После открытия ИП у вас будет';
					break;
				case 'ooo_virtual':
					final__open_array = you_will_have.ooo_virtual;
					you_want_to.innerText = `Вы хотите открыть ООО с виртуальной зоной ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
						quiz_data.seal === 'yes' ? 'и печатью' : ''
					}`;
					sum_h2.innerText = 'После открытия ООО с виртуальной зоной у вас будет';
					break;
				case 'ao':
					final__open_array = you_will_have.ao;
					you_want_to.innerText = `Вы хотите открыть АО ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
						quiz_data.seal === 'yes' ? 'и печатью' : ''
					}`;
					sum_h2.innerText = 'После открытия АО у вас будет';
					break;
				case 'nko':
					final__open_array = you_will_have.nko;
					you_want_to.innerText = `Вы хотите открыть НКО ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
						quiz_data.seal === 'yes' ? 'и печатью' : ''
					}`;
					sum_h2.innerText = 'После открытия НКО у вас будет';
					break;
				case 'ooo':
					final__open_array = you_will_have.ooo;
					you_want_to.innerText = `Вы хотите открыть ООО ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
						quiz_data.seal === 'yes' ? 'и печатью' : ''
					}`;
					sum_h2.innerText = 'После открытия ООО у вас будет';
					break;
				case 'mk':
					final__open_array = you_will_have.mk;
					you_want_to.innerText = `Вы хотите открыть Международную компанию ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
						quiz_data.seal === 'yes' ? 'и печатью' : ''
					}`;
					sum_h2.innerText = 'После открытия Международной Компании у вас будет';
					break;
			}
			questions_list.innerHTML = '';
	
			final__open_array.forEach((string) => {
				questions_list.innerHTML += `<div class="label_width_question">${string[0]} <img src="images/icons/blue_question_icon.svg" alt="" onclick="showHint('${string[0]}', '${string[1]}')" ></div>`;
			});
		}

		function handleQUizGrids(e) {
			if (e.target.dataset.value) {
				for (var i = 0; i < e.target.parentElement.children.length; i++) {
					e.target.parentElement.children[i].classList.remove('quiz_grid_element-active');
				}
	
				e.target.classList.add('quiz_grid_element-active');
				forwardBlocked = false;
				next_slide.classList.remove('inactive_quiz_button');
	
				if (current_slide < 1) {
					console.log(quiz_data);
					priceList[0].forEach((el) => {
						if (el.name === e.target.dataset.value) {
							quiz_data.registerType = el;
						}
	
						if (e.target.dataset.value === 'individual_entrepreneur') {
							slides[2].querySelector('h2').innerText =
								'Нужно ли вам обучение заполнению декларации для ИП (на английском языке, русском языке).По факту первого активного месяца.? (+100$ к стоимости)';
							priceList[2][0].price = 100;
							if (quiz_data.seal === 'yes') {
								implementPrice(priceList[2][0].price, '+');
							}
						} else {
							slides[2].querySelector('h2').innerText = 'Нужна ли вам печать компании? (+80$ к стоимости)';
							priceList[2][0].price = 80;
							if (quiz_data.seal === 'yes') {
								implementPrice(priceList[2][0].price, '+');
							}
						}
	
						if (quiz_data.personal == 'false') {
							implementPrice(quiz_data.registerType.remote_price, 'refresh');
						} else if (quiz_data.personal == 'true' || quiz_data.personal == '') {
							implementPrice(quiz_data.registerType.price, 'refresh');
						}
					});
	
					slide_tracker[0] = 'action done';
				}
	
				if (current_slide > 0) {
					if (e.target.dataset.value == 'false') {
						implementPrice(quiz_data.registerType.remote_price, 'refresh');
					} else if (e.target.dataset.value == 'true') {
						implementPrice(quiz_data.registerType.price, 'refresh');
					}
					quiz_data.personal = e.target.dataset.value;
					slide_tracker[1] = 'action done';
				}
			}
		}

		function handleSlide(direction) {
			if (direction === 'forward' && !forwardBlocked) {
				if (current_slide < 4) {
					current_slide++;
					if (current_slide > furthest_slide) {
						furthest_slide++;
					}
	
					locked_price[current_slide] = price_counter;
	
					slides[current_slide - 1].classList.remove('current_slide');
	
					setTimeout(() => {
						slides[current_slide - 1].classList.remove('slide_aligned');
					}, 100);
					slides[current_slide].classList.add('slide_aligned');
					setTimeout(() => {
						slides[current_slide].classList.add('current_slide');
					}, 100);
	
					if (current_slide === slides.length - 2) {
						final_price.innerText = `Итоговая стоимость - $${price_counter + printing}`;
						slide_tracker[3] = 'action done';
					} else if (current_slide === slides.length - 1) {
						document.querySelector('.quiz_buttons_container').style.display = 'none';
					}
	
					current_slide < furthest_slide ? (forwardBlocked = false) : (forwardBlocked = true);
	
					if (current_slide === 1) {
						toggleWarningAboutRussiaAndBelarus();
					}
					if (current_slide === 2) {
						implementOpenSteps();
					} else if (current_slide === 3) {
						implementResults();
					}
	
					if (slide_tracker[current_slide] === 'action done') {
						forwardBlocked = false;
					}
				}
			} else if (direction === 'backwards') {
				if (current_slide > 0) {
					current_slide--;
	
					slides[current_slide + 1].classList.remove('current_slide');
					setTimeout(() => {
						slides[current_slide + 1].classList.remove('slide_aligned');
					}, 100);
	
					setTimeout(() => {
						slides[current_slide].classList.add('slide_aligned');
						setTimeout(() => {
							slides[current_slide].classList.add('current_slide');
						}, 40);
					}, 110);
	
					locked_price.pop();
					if (locked_price.length < 1) {
						locked_price[0] = 0;
					}
					forwardBlocked = false;
				}
			}
			forwardBlocked ? next_slide.classList.add('inactive_quiz_button') : next_slide.classList.remove('inactive_quiz_button');
			handleNumbers();
			if (current_slide < 4) {
				step.innerHTML = `${current_slide + 1} шаг`;
			}
		}
	}



	var open_steps_title = document.querySelector('#open_steps_title');
	var open_steps_text = document.querySelector('#open_steps_text');

	// function implementOpenSteps() {
	// 	var type = quiz_data.registerType.name;
	// 	var remote;
	// 	var final__open_array;
	// 	quiz_data.personal === 'true' ? (remote = personally) : (remote = remotely);

	// 	switch (type) {
	// 		case 'individual_entrepreneur':
	// 			final__open_array = remote.individual_entrepreneur;
	// 			open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия ИП нужно:`;
	// 			break;
	// 		case 'ooo_virtual':
	// 			final__open_array = remote.ooo_virtual;
	// 			open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия ООО со статусом виртуальной зоны нужно:`;
	// 			break;
	// 		case 'ao':
	// 			final__open_array = remote.ao;
	// 			open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия AО нужно:`;
	// 			break;
	// 		case 'nko':
	// 			final__open_array = remote.nko;
	// 			open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия НКО нужно:`;
	// 			break;
	// 		case 'ooo':
	// 			final__open_array = remote.ooo;
	// 			open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия ООО нужно:`;
	// 			break;
	// 		case 'mk':
	// 			final__open_array = remote.mk;
	// 			open_steps_title.innerText = `Для ${quiz_data.personal === 'true' ? '' : 'удаленного'} открытия международной компании нужно:`;
	// 			break;
	// 	}
	// 	open_steps_text.innerHTML = '';

	// 	final__open_array.forEach((string, i) => {
	// 		open_steps_text.innerHTML += `<p>${i + 1}. ${string}</p>`;
	// 	});
	// }

	var summary_slide = document.querySelector('#summary');
	var you_want_to = summary_slide.querySelector('p');
	var sum_h2 = summary_slide.querySelectorAll('h2')[1];
	var questions_list = document.querySelector('.label_questions_list');
	// function implementResults() {
	// 	var type = quiz_data.registerType.name;
	// 	var remote;
	// 	var final__open_array;
	// 	quiz_data.personal === 'true' ? (remote = personally) : (remote = remotely);

	// 	switch (type) {
	// 		case 'individual_entrepreneur':
	// 			final__open_array = you_will_have.individual_entrepreneur;
	// 			you_want_to.innerText = `Вы хотите открыть ИП ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
	// 				quiz_data.seal === 'yes' ? 'и печатью' : ''
	// 			}`;
	// 			sum_h2.innerText = 'После открытия ИП у вас будет';
	// 			break;
	// 		case 'ooo_virtual':
	// 			final__open_array = you_will_have.ooo_virtual;
	// 			you_want_to.innerText = `Вы хотите открыть ООО с виртуальной зоной ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
	// 				quiz_data.seal === 'yes' ? 'и печатью' : ''
	// 			}`;
	// 			sum_h2.innerText = 'После открытия ООО с виртуальной зоной у вас будет';
	// 			break;
	// 		case 'ao':
	// 			final__open_array = you_will_have.ao;
	// 			you_want_to.innerText = `Вы хотите открыть АО ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
	// 				quiz_data.seal === 'yes' ? 'и печатью' : ''
	// 			}`;
	// 			sum_h2.innerText = 'После открытия АО у вас будет';
	// 			break;
	// 		case 'nko':
	// 			final__open_array = you_will_have.nko;
	// 			you_want_to.innerText = `Вы хотите открыть НКО ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
	// 				quiz_data.seal === 'yes' ? 'и печатью' : ''
	// 			}`;
	// 			sum_h2.innerText = 'После открытия НКО у вас будет';
	// 			break;
	// 		case 'ooo':
	// 			final__open_array = you_will_have.ooo;
	// 			you_want_to.innerText = `Вы хотите открыть ООО ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
	// 				quiz_data.seal === 'yes' ? 'и печатью' : ''
	// 			}`;
	// 			sum_h2.innerText = 'После открытия ООО у вас будет';
	// 			break;
	// 		case 'mk':
	// 			final__open_array = you_will_have.mk;
	// 			you_want_to.innerText = `Вы хотите открыть Международную компанию ${quiz_data.personal === 'true' ? '' : 'удаленно'} с бизнес картой ${
	// 				quiz_data.seal === 'yes' ? 'и печатью' : ''
	// 			}`;
	// 			sum_h2.innerText = 'После открытия Международной Компании у вас будет';
	// 			break;
	// 	}
	// 	questions_list.innerHTML = '';

	// 	final__open_array.forEach((string) => {
	// 		questions_list.innerHTML += `<div class="label_width_question">${string[0]} <img src="images/icons/blue_question_icon.svg" alt="" onclick="showHint('${string[0]}', '${string[1]}')" ></div>`;
	// 	});
	// }

	window.showHint = function (title, description) {
		var overlay = document.createElement('div');
		overlay.classList.add('overlay');
		overlay.classList.add('consultation_overlay');
		overlay.style.display = 'block';
		overlay.innerHTML = `
		<div class="popup">
			<div class="popup_text_block">
				<h1>${title}</h1>
				<p>${description}</p>
			</div>
			
        	<div style="top: 20px; right:20px" class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>
    	</div>

		`;

		document.body.appendChild(overlay);
		document.body.style.overflowY = 'hidden';

		function killConsultation() {
			overlay.remove();
			document.body.style.overflowY = 'scroll';
		}
		overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
	};

	var priceList = [
		[
			{ name: 'mk', price: 1100, remote_price: 1100 },
			{ name: 'ao', price: 690, remote_price: 1050 },
			{ name: 'nko', price: 690, remote_price: 1050 },
			{ name: 'ooo_virtual', price: 690, remote_price: 1050 },
			{ name: 'ooo', price: 450, remote_price: 690 },
			{ name: 'individual_entrepreneur', price: 250, remote_price: 450 },
		],
		[{ name: true }, { name: false }],
		[
			{ name: 'yes', price: 80 },
			{ name: 'no', price: 0 },
			{ name: 'dont_know', price: 0 },
		],
	];

	var slides = document.querySelectorAll('.quiz_slide');
	var prev_slide = document.querySelector('.prev_step_quiz');
	var next_slide = document.querySelector('.next_step_quiz');

	var business_types = document.querySelector('#business_type_container');
	var personal_container = document.querySelector('#quiz_personal');

	var mobile_price_container = document.querySelector('#mobile_quiz_input');
	var desktop_price_container = document.querySelector('#desktop_quiz_input');

	var quiz_checkbox_container = document.querySelector('#select_quiz_checkbox');
	var quiz_form_tabs = document.querySelector('.formfeedback__tabs');

	var final_price = document.querySelector('#final_price_inline');

	var step = document.querySelector('.step_num');

	var quiz_form = document.querySelector('#quiz_form');

	var quiz_form_inputs = quiz_form.querySelector('form');

	var forms = document.querySelectorAll('.quiz-form');

	var pagination = document.querySelector('.quiz_pagination');
	var slides_container = document.querySelector('.quiz_slides_container');

	var current_slide = 0;
	var locked_price = [0];
	var price_counter = 0;
	var forwardBlocked = true;
	var furthest_slide = 0;
	var printing = 0;
	var slide_tracker = [];

	forms.forEach((form) => {
		form.addEventListener('submit', (e) => e.preventDefault());
	});
	business_types.addEventListener('click', (e) => {
		handleQUizGrids(e);
	});
	personal_container.addEventListener('click', (e) => {
		handleQUizGrids(e);
	});

	next_slide.addEventListener('click', () => {
		handleSlide('forward');
	});
	prev_slide.addEventListener('click', () => {
		handleSlide('backwards');
	});
	quiz_checkbox_container.addEventListener('click', (e) => {
		if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL') {
			var context = e.target;
			if (context.tagName === 'INPUT' && priceList[current_slide]) {
				for (var price of priceList[current_slide]) {
					if (price.name === context.id) {
						implementPrice(price.price, '+');
					}
				}
				quiz_data.seal = context.id;
			} else if (context.tagName === 'LABEL' && priceList[current_slide]) {
				for (var price of priceList[current_slide]) {
					if (price.name === context.children[0].id) {
						implementPrice(price.price, '+');
					}
				}
				quiz_data.seal = context.children[0].id;
			}
			slide_tracker[2] = 'action done';
			forwardBlocked = false;
			forwardBlocked ? next_slide.classList.add('inactive_quiz_button') : next_slide.classList.remove('inactive_quiz_button');
		}
	});
	// function toggleWarningAboutRussiaAndBelarus() {
	// 	const warning_message = document.querySelector('#temp_warning_RB');
	// 	if (warning_message) {
	// 		warning_message.remove();
	// 	}
	// 	var message;
	// 	switch (quiz_data.registerType.name) {
	// 		case 'individual_entrepreneur':
	// 			message = 'From 03/01/2022, for citizens of the Russian Federation and the Republic of Belarus, the consideration of an application for registration of an individual entrepreneur has been extended to 30 days.';
	// 			personal_container.innerHTML += '<h1 id="temp_warning_RB">' + message + '</h1>';

	// 			break;
	// 		case 'ooo':
	// 			message =
	// 				'С 01.03.2022 для граждан Российской Федерации и Республики Беларусь рассмотрение заявки на регистрацию компаниям продлили до 30 дней. Компаниям, где учредитель и/или директор нерезидент не открывают корпоративные счета без ВНЖ.';
	// 			personal_container.innerHTML += '<h1 id="temp_warning_RB">' + message + '</h1>';

	// 			break;
	// 		default:
	// 			message = '';
	// 			break;
	// 	}
	// }
	// function handleQUizGrids(e) {
	// 	if (e.target.dataset.value) {
	// 		for (var i = 0; i < e.target.parentElement.children.length; i++) {
	// 			e.target.parentElement.children[i].classList.remove('quiz_grid_element-active');
	// 		}

	// 		e.target.classList.add('quiz_grid_element-active');
	// 		forwardBlocked = false;
	// 		next_slide.classList.remove('inactive_quiz_button');

	// 		if (current_slide < 1) {
	// 			console.log(quiz_data);
	// 			priceList[0].forEach((el) => {
	// 				if (el.name === e.target.dataset.value) {
	// 					quiz_data.registerType = el;
	// 				}

	// 				if (e.target.dataset.value === 'individual_entrepreneur') {
	// 					slides[2].querySelector('h2').innerText =
	// 						'Нужно ли вам обучение заполнению декларации для ИП (на английском языке, русском языке).По факту первого активного месяца.? (+100$ к стоимости)';
	// 					priceList[2][0].price = 100;
	// 					if (quiz_data.seal === 'yes') {
	// 						implementPrice(priceList[2][0].price, '+');
	// 					}
	// 				} else {
	// 					slides[2].querySelector('h2').innerText = 'Нужна ли вам печать компании? (+80$ к стоимости)';
	// 					priceList[2][0].price = 80;
	// 					if (quiz_data.seal === 'yes') {
	// 						implementPrice(priceList[2][0].price, '+');
	// 					}
	// 				}

	// 				if (quiz_data.personal == 'false') {
	// 					implementPrice(quiz_data.registerType.remote_price, 'refresh');
	// 				} else if (quiz_data.personal == 'true' || quiz_data.personal == '') {
	// 					implementPrice(quiz_data.registerType.price, 'refresh');
	// 				}
	// 			});

	// 			slide_tracker[0] = 'action done';
	// 		}

	// 		if (current_slide > 0) {
	// 			if (e.target.dataset.value == 'false') {
	// 				implementPrice(quiz_data.registerType.remote_price, 'refresh');
	// 			} else if (e.target.dataset.value == 'true') {
	// 				implementPrice(quiz_data.registerType.price, 'refresh');
	// 			}
	// 			quiz_data.personal = e.target.dataset.value;
	// 			slide_tracker[1] = 'action done';
	// 		}
	// 	}
	// }

	// function handleSlide(direction) {
	// 	if (direction === 'forward' && !forwardBlocked) {
	// 		if (current_slide < 4) {
	// 			current_slide++;
	// 			if (current_slide > furthest_slide) {
	// 				furthest_slide++;
	// 			}

	// 			locked_price[current_slide] = price_counter;

	// 			slides[current_slide - 1].classList.remove('current_slide');

	// 			setTimeout(() => {
	// 				slides[current_slide - 1].classList.remove('slide_aligned');
	// 			}, 100);
	// 			slides[current_slide].classList.add('slide_aligned');
	// 			setTimeout(() => {
	// 				slides[current_slide].classList.add('current_slide');
	// 			}, 100);

	// 			if (current_slide === slides.length - 2) {
	// 				final_price.innerText = `Итоговая стоимость - $${price_counter + printing}`;
	// 				slide_tracker[3] = 'action done';
	// 			} else if (current_slide === slides.length - 1) {
	// 				document.querySelector('.quiz_buttons_container').style.display = 'none';
	// 			}

	// 			current_slide < furthest_slide ? (forwardBlocked = false) : (forwardBlocked = true);

	// 			if (current_slide === 1) {
	// 				toggleWarningAboutRussiaAndBelarus();
	// 			}
	// 			if (current_slide === 2) {
	// 				implementOpenSteps();
	// 			} else if (current_slide === 3) {
	// 				implementResults();
	// 			}

	// 			if (slide_tracker[current_slide] === 'action done') {
	// 				forwardBlocked = false;
	// 			}
	// 		}
	// 	} else if (direction === 'backwards') {
	// 		if (current_slide > 0) {
	// 			current_slide--;

	// 			slides[current_slide + 1].classList.remove('current_slide');
	// 			setTimeout(() => {
	// 				slides[current_slide + 1].classList.remove('slide_aligned');
	// 			}, 100);

	// 			setTimeout(() => {
	// 				slides[current_slide].classList.add('slide_aligned');
	// 				setTimeout(() => {
	// 					slides[current_slide].classList.add('current_slide');
	// 				}, 40);
	// 			}, 110);

	// 			locked_price.pop();
	// 			if (locked_price.length < 1) {
	// 				locked_price[0] = 0;
	// 			}
	// 			forwardBlocked = false;
	// 		}
	// 	}
	// 	forwardBlocked ? next_slide.classList.add('inactive_quiz_button') : next_slide.classList.remove('inactive_quiz_button');
	// 	handleNumbers();
	// 	if (current_slide < 4) {
	// 		step.innerHTML = `${current_slide + 1} шаг`;
	// 	}
	// }

	function implementPrice(price, type) {
		var value;
		if (type === '+') {
			printing = price;
			value = locked_price[current_slide] + price;
		} else if (type === 'refresh') {
			value = price + printing;
		}

		mobile_price_container.innerText = `$${value}`;
		desktop_price_container.innerText = `$${value}`;
		price_counter = value - printing;
		quiz_data.price = value;
	}
	quiz_form.addEventListener('click', (e) => {
		handleQuizForm(e);
	});

	function handleQuizForm(e) {
		if (e.target.tagName === 'BUTTON') {
			e.preventDefault();

			var is_valid = true;
			if (quiz_form_inputs.elements['name'].value.trim() === '') {
				quiz_form_inputs.elements['name'].parentElement.classList.add('invalid');
				is_valid = false;
			}
			if (quiz_form_inputs.elements['contact_way'].value.trim() === '') {
				quiz_form_inputs.elements['contact_way'].parentElement.classList.add('invalid');
				is_valid = false;
			}

			if (!is_valid) {
				return;
			}

			target = e.target;

			var contact_quiz_data = new FormData(quiz_form_inputs);
			var dataObject = {};

			contact_quiz_data.forEach(function (value, key) {
				quiz_data.contact[key] = value;
			});

			quiz_data.contact.contact_context = quiz_form_tabs.querySelector('.active').dataset.btn;

			quiz_data.page = document.title;
			quiz_data.time = moment().locale('ru').tz('Europe/Moscow').format('MMMM Do YYYY, HH:mm:ss');

			var overlay = document.createElement('div');
			overlay.classList.add('overlay');
			overlay.classList.add('consultation_overlay');
			overlay.style.display = 'flex';
			overlay.style.justifyContent = 'center';
			overlay.style.alignItems = 'center';
			overlay.innerHTML = `
				<div class="loader"></div>
			`;
			document.body.appendChild(overlay);
			document.body.style.overflowY = 'hidden';

			function killConsultation() {
				overlay.remove();
				document.body.style.overflowY = 'scroll';
			}

			fetch('scripts/quiz-form-handler.php', {
				method: 'POST',
				body: JSON.stringify(quiz_data),
			})
				.then((response) => {
					if (response.ok) {
						return `
							<div class="quiz_slide slide_aligned current_slide">
								<div class="quiz_stage_title">Спасибо, что воспользовались <br/> нашим расчетом.</div>
								<p class="thank_you_p">Мы свяжемся с вами в течение получаса в рабочее время с 10 до 19 часов по Тбилиси.</p>
								<p class="thank_you_p">Пока вы ожидаете звонка, скачайте памятку по процедуре открытия компании и чек-лист не обходимых документов.</p>
								<p class="thank_you_p">*Окончательная стоимость зависит от количества учредителей и являются ли учредители физлицами или юрлицами.</p>
								<button class="btn get_document btn-hover" style="padding: 23px 40px; margin-top: 50px; display: flex; width: auto">
									<img style="margin-right: 10px" src="images/icons/document.svg"/> Скачать чек-лист
								</button>
							</div>
						`;
					} else {
						return `
						<div class="quiz_slide slide_aligned current_slide">
							<div class="quiz_stage_title">Произошла ошибка</div>
							<p>К сожалению, по техническим причинам не удалось отправить вашу заявку</p>
							<p>Пожалуйста, повторите попытку позже или свяжитесь с нами по телефону <a href="tel:+995598888118">+995 598 888 118</a></p>
						</div>
						`;
					}
				})
				.then((data) => {
					slides_container.innerHTML = data;
					var pdf = document.querySelector('.get_document');
					pdf.addEventListener('click', getDocument);
					document.querySelectorAll('.prize_container').forEach((el) => {
						var image = el.children[0];
						el.style.cursor = 'pointer';
						image.classList.add('available');
						el.addEventListener('click', getDocument);
					});
					killConsultation();
				})
				.catch((e) => {
					document.body.appendChild(overlay);
					document.body.style.overflowY = 'hidden';
					overlay.innerHTML = `
						<div class="popup">
							<div class="popup_text_block">
                			    <h1>Произошла ошибка</h1>
                			    <p>К сожалению, по техническим причинам не удалось отправить вашу заявку</p>
                			    <p>Пожалуйста, повторите попытку позже или свяжитесь с нами по телефону <a href="tel:+995598888118">+995 598 888 118</a></p>
                			</div>
							<div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>
						</div>
					`;
					overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
				});
		}
	}

	function handleNumbers() {
		var numbers = [0, 3, 6, 9];
		var number_I = 0;
		for (var i = 0; i < pagination.children.length; i++) {
			pagination.children[i].classList.remove('current');
		}
		while (number_I < current_slide + 1 && current_slide < 4) {
			pagination.children[numbers[number_I]].classList.add('number_bubble-active');
			if (pagination.children[numbers[number_I] - 1]) {
				pagination.children[numbers[number_I] - 1].classList.add('bubble_join-done');
			}
			if (pagination.children[numbers[number_I] + 1]) {
				pagination.children[numbers[number_I] + 1].classList.add('bubble_join-done');
			}
			number_I++;
		}
		if (pagination.children[numbers[current_slide]]) {
			pagination.children[numbers[current_slide]].classList.add('current');
		}
	}

	var quiz_info = document.querySelector('.quiz_info');
	var popup = document.querySelector('.overlay');
	var popup_close = document.querySelector('.popup_close');
	var popup_tabs_container = document.querySelector('.popup_tabs_container');
	var business_descriptions = document.querySelector('.popup_tab_content');
	var popup_quiz_continue = document.querySelector('.popup_quiz_action_btn');

	quiz_info.addEventListener('click', function () {
		popup.style.display = 'block';
		document.body.style.overflowY = 'hidden';
	});
	popup_close.addEventListener('click', function () {
		popup.style.display = 'none';
		document.body.style.overflowY = 'scroll';
	});
	popup_tabs_container.addEventListener('click', function (e) {
		if (e.target.classList.contains('popup_tab') && e.target.dataset.popup_value) {
			[...popup_tabs_container.children].forEach((el) => el.classList.remove('popup_tab-active'));
			[...business_descriptions.children].forEach((el) => el.classList.remove('active_description'));
			var target = e.target;
			business_descriptions.style.display = 'block';
			target.classList.add('popup_tab-active');
			business_descriptions.children[target.dataset.order].classList.add('active_description');
			business_types.querySelector(`div[data-value=${target.dataset.popup_value}]`).click();
		}
	});
	popup_quiz_continue.addEventListener('click', function () {
		next_slide.click();
		popup_close.click();
	});

	function getDocument() {
		var document_name;
		var receiver_doc_name;
		switch (quiz_data.registerType.name) {
			case 'ao':
				document_name = 'AO';
				receiver_doc_name = 'АО';
				break;
			case 'individual_entrepreneur':
				document_name = 'Individual_Entrepreneur';
				receiver_doc_name = 'ИП';
				break;
			case 'ooo':
				document_name = 'OOO';
				receiver_doc_name = 'ООО';
				break;
			case 'ooo_virtual':
				document_name = 'LLC_with_virtual_zone_status';
				receiver_doc_name = 'ООО со статусом виртуальной зоны';
				break;
			case 'nko':
				document_name = 'NKO';
				receiver_doc_name = 'НКО';
				break;
			case 'mk':
				document_name = 'MK';
				receiver_doc_name = 'Международная компания';
				break;
		}
		window.location.href = `scripts/download_pdf.php?method=post&type=${document_name}&name=${receiver_doc_name}`;
	}
});
