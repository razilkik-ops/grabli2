const TELEGRAM_URL = 'https://t.me/umanko4';
const WHATSAPP_URL = 'https://wa.me/375296597050';
const CLASS_3_PAYMENT_URL = process.env.NEXT_PUBLIC_CLASS_3_PAYMENT_URL || TELEGRAM_URL;
const CLASS_2_PAYMENT_URL = process.env.NEXT_PUBLIC_CLASS_2_PAYMENT_URL || TELEGRAM_URL;
const CLASS_1_PAYMENT_URL = process.env.NEXT_PUBLIC_CLASS_1_PAYMENT_URL || TELEGRAM_URL;
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const asset = (path: string) => `${BASE_PATH}${path}`;

const navItems = [
  ['Для кого', 'audience'],
  ['Результаты', 'results'],
  ['Программа', 'program'],
  ['Тарифы', 'pricing'],
  ['Автор', 'author'],
];

const audienceItems = [
  {
    text: 'Испытывает страх одиночества и будущего в личной жизни.',
    icon: '/assets/audience-icon-person-v2.png',
  },
  {
    text: 'Живёт в «режиме директора 24/7» — привык тащить всё на себе и никак не может выключиться.',
    icon: '/assets/audience-icon-briefcase-v2.png',
  },
  {
    text: 'Привык ждать подвоха и держать оборону, блокируя собственное живое тепло.',
    icon: '/assets/audience-icon-shield-v2.png',
  },
  {
    text: 'Раз за разом опекает, понимает и мотивирует других, получая в ответ лишь опустошение.',
    icon: '/assets/audience-icon-clock-v2.png',
  },
  {
    text: 'Живёт в режиме отложенного счастья, отдавая ресурсы, время и силы без взаимности.',
    icon: '/assets/audience-icon-heart-v2.png',
  },
  {
    text: 'Подавляет свои желания, соглашаясь на вторые роли, пока внутри копится злость на собственную мягкость.',
    icon: '/assets/audience-icon-sprout-v2.png',
  },
];

const results = [
  {
    title: 'Ясность и взлом сценария',
    text: 'Вы увидите истинную первопричину повторений и научитесь останавливать автоматическую реакцию до разрушительного действия.',
    icon: '/assets/results-icon-clarity-v2.png',
  },
  {
    title: 'Внутренняя опора',
    text: 'Перестанете зависеть от чужих оценок и отделите свои реальные желания от навязанных «надо».',
    icon: '/assets/results-icon-support-v2.png',
  },
  {
    title: 'Баланс и распределение сил',
    text: 'Научитесь бережно снимать броню, расслабляться и позволять другим заботиться о вас без риска для границ.',
    icon: '/assets/results-icon-exit-v2.png',
  },
  {
    title: 'Твёрдые личные границы',
    text: 'Будете видеть скрытые манипуляции, спокойно говорить «нет» и выбирать отношения на равных.',
    icon: '/assets/results-icon-steps-v2.png',
  },
  {
    title: 'Новые правила жизни',
    text: 'Создадите личный пошаговый план и закрепите поведенческие привычки, которые не дадут вернуться в тупик.',
    icon: '/assets/about-icon-target.png',
  },
];

const modules = [
  {
    week: '01',
    title: 'Почему я снова наступаю на те же «грабли»?',
    text: 'Разбираемся, почему мозг путает эмоциональный накал с глубиной, а спокойствие считает скукой. Находим личные точки слива сил и момент запуска старого сценария.',
  },
  {
    week: '02',
    title: '«Чужие» в моей жизни',
    text: 'Отделяем настоящие желания от семейных, социальных и чужих ожиданий. Убираем привычку заслуживать внимание через гиперответственность и жертвенность.',
  },
  {
    week: '03',
    title: 'Учимся не тащить всё на себе',
    text: 'Исследуем «режим директора» и внедряем разумное распределение сил: где включить фокус, а где — доверить часть заботы другим.',
  },
  {
    week: '04',
    title: 'Почему вокруг одни «сложные»?',
    text: 'Разбираем анатомию окружения, учимся замечать манипуляции заранее и без чувства вины говорить «нет» тем, кто использует вашу силу.',
  },
  {
    week: '05',
    title: 'Прекращаем выбирать дискомфорт',
    text: 'Работаем с тягой к изматывающим сюжетам и учимся останавливать импульс до действия, заменяя эмоциональные качели спокойным выбором комфорта.',
  },
  {
    week: '06',
    title: 'Быть собой, а не играть роль',
    text: 'Снимаем маски «вечно сильной», «удобной» или «спасающей» и строим отношения не из страха одиночества, а из желания быть с равным партнёром.',
  },
  {
    week: '07',
    title: 'Новая жизнь: как закрепить результат',
    text: 'Перестраиваем ежедневные привычки и прописываем свои правила: как жить, кого пускать в свой мир и как реагировать на стресс без отката назад.',
  },
];

const plans = [
  {
    name: 'Класс 3',
    promise: 'Увидеть, узнать, понять, попробовать, научиться',
    duration: '49 дней',
    price: '880 €',
    items: ['7 групповых уроков', 'Рабочая тетрадь', 'Эмо-аптечка «Сияй»'],
    paymentUrl: CLASS_3_PAYMENT_URL,
  },
  {
    name: 'Класс 2',
    promise: 'Увидеть, узнать, понять, попробовать, научиться, получить навык, закрепить',
    duration: '77 дней',
    price: '1210 €',
    badge: '10 мест',
    featured: true,
    items: ['7 групповых уроков', 'Рабочая тетрадь', 'Эмо-аптечка «Сияй»', '11 видеовстреч'],
    paymentUrl: CLASS_2_PAYMENT_URL,
  },
  {
    name: 'Класс 1',
    promise: 'Увидеть, узнать, понять, попробовать, научиться, получить навык, закрепить, уметь + VIP-поддержка',
    duration: '92 дня',
    price: '1850 €',
    badge: '3 места',
    items: ['7 групповых уроков', 'Рабочая тетрадь', 'Эмо-аптечка «Сияй»', '14 видеовстреч', 'Быстрая поддержка в формате сообщений и коротких созвонов'],
    paymentUrl: CLASS_1_PAYMENT_URL,
  },
];

const formatItems = [
  {
    number: '01',
    title: '7 недель онлайн',
    text: 'Последовательная практическая работа без угрозы для личного и рабочего пространства.',
    icon: '/assets/about-icon-group.png',
  },
  {
    number: '02',
    title: 'Минимум теории',
    text: 'Только ёмкие разборы, матрицы и рабочие схемы — без длинных скучных лекций.',
    icon: '/assets/about-icon-brain.png',
  },
  {
    number: '03',
    title: 'Практические инструменты',
    text: 'Экспресс-диагностика, рабочие тетради, чек-листы и PDF-руководство по скрытым сценариям.',
    icon: '/assets/about-icon-target.png',
  },
  {
    number: '04',
    title: 'Интеграция и поддержка',
    text: 'Разбор реальных жизненных ситуаций, сопровождение эксперта и помощь в закреплении результата.',
    icon: '/assets/about-icon-shield.png',
  },
];

const credentials = [
  ['Профессиональный фундамент', 'Диплом военного психолога (1995). Более 15 лет практического опыта восстановления личной автономии и разбора циклических тупиков.'],
  ['Медийность и признание', 'Эксперт по системному анализу, теле- и радиоведущий с опытом работы более 25 лет.'],
  ['Авторские программы', 'Создатель методик «Точка опоры», «Связь достижений и эмоций», «Безопасная близость» и психологического квеста «Радость».'],
  ['Методологическая опора', 'Системное мышление, аналитическая психология, теории зрелой близости и смысловой ориентированности.'],
];

const reviews = [
  ['/assets/review-program-1.jpg', 'Отзыв участницы семинедельной программы о ясности, логике и внутренней уверенности'],
  ['/assets/review-program-2.jpg', 'Отзыв участницы программы о внутренней опоре, спокойствии и радости'],
  ['/assets/review-program-3.jpg', 'Отзыв участницы программы о безопасности, внутреннем покое и энергии'],
  ['/assets/review-program-4.jpg', 'Отзыв Александры о порядке, свободном времени и выходе из автопилота'],
];

function Cta({ children, className = '', href = TELEGRAM_URL }: { children: React.ReactNode; className?: string; href?: string }) {
  return (
    <a className={`cta ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Анти-грабли',
  description: '7-недельная практическая программа Константина Юманова по выходу из повторяющихся сценариев в личной жизни.',
  provider: {
    '@type': 'Person',
    name: 'Константин Юманов',
    jobTitle: 'Социальный педагог, практический психолог',
  },
  offers: plans.map((plan) => ({
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: plan.price.replace(/[^0-9]/g, ''),
    name: `${plan.name}: ${plan.promise}`,
    url: plan.paymentUrl,
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="hero" aria-labelledby="hero-title">
        <video className="hero-video" src={asset('/assets/hero-background.mp4')} autoPlay muted loop playsInline aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <header className="header">
          <a className="brand" href="#hero-title" aria-label="Анти-грабли — на главную">Анти-грабли</a>
          <nav className="desktop-nav" aria-label="Основная навигация">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <details className="mobile-menu">
            <summary>Меню</summary>
            <nav aria-label="Мобильная навигация">
              {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
            </nav>
          </details>
        </header>

        <div className="hero-content">
          <p className="eyebrow">Авторская методология Константина Юманова</p>
          <h1 id="hero-title">«Анти-грабли»</h1>
          <p className="hero-kicker">Выход из круга повторяющихся сценариев в личной жизни</p>
          <p className="hero-subtitle">
            Практическая системная программа для тех, кто устал тащить всё на себе,
            откладывать свои интересы и хочет вернуть понятные, честные ориентиры.
          </p>
          <div className="hero-actions">
            <Cta>Принять участие</Cta>
            <a className="ghost-cta" href="#program">Посмотреть программу</a>
          </div>
          <ul className="hero-meta" aria-label="Основные параметры программы">
            <li><strong>7</strong><span>уроков — 7 недель</span></li>
            <li><strong>до 14</strong><span>групповых видеовстреч</span></li>
            <li><strong>49–92</strong><span>дней программы</span></li>
          </ul>
        </div>
      </section>

      <section className="section manifesto" aria-labelledby="manifesto-title">
        <div className="section-shell manifesto-shell">
          <p className="section-label">Что такое «Анти-грабли»</p>
          <h2 id="manifesto-title">Хватит наступать на одно и то же.</h2>
          <div className="manifesto-grid">
            <p className="manifesto-lead">
              Давайте без иллюзий. Если из раза в раз повторяется один и тот же финал —
              меняются только лица и декорации — дело не в везении, карме или токсичном окружении.
            </p>
            <div className="manifesto-copy">
              <p>Дело в привычном механизме действий, который каждый раз запускается на автомате.</p>
              <p>Пора увидеть, как устроен этот процесс, остановить разрушительный сюжет и вернуть себе управление собственной жизнью.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section invitation" aria-labelledby="invitation-title">
        <div className="section-shell invitation-shell">
          <p className="section-label">Личное приглашение</p>
          <h2 id="invitation-title">Я знаю, каково это — жить в тревоге и тянуть всё на себе.</h2>

          <article className="invitation-card">
            <div className="portrait-column">
              <figure className="portrait">
                <img src={asset('/assets/author-konstantin.jpg')} alt="Константин Юманов" />
              </figure>
              <p className="signature">Константин Юманов</p>
              <p className="role">Практик · аналитик · методолог</p>
            </div>
            <div className="invitation-copy">
              <p className="large-copy">
                Когда отношения — это либо скука, либо боль эмоциональных качелей,
                трудно поверить, что может быть по-другому.
              </p>
              <p>
                Я — Константин Юманов. В психологии с 1995 года, на ТВ и радио — больше 25 лет.
                Я видел множество историй и прожил собственные повторения. За 15+ лет системного
                анализа скрытых сценариев прошёл этот путь со многими людьми: от циклических тупиков
                к отношениям, где есть глубина, тепло и лёгкость.
              </p>
              <p>
                «Анти-грабли» — не марафон и не теоретическая лекция. Это последовательный процесс,
                где мы перестраиваем автоматические сценарии, возвращаем контроль над состоянием и
                фиксируем новые правила вашей жизни.
              </p>
              <Cta className="inline-cta">Позволить себе выдохнуть</Cta>
            </div>
          </article>

          <div className="event-gallery" aria-label="Фотографии с выступлений Константина Юманова">
            <figure><img src={asset('/assets/lecture-hall-1.jpg')} alt="Константин Юманов выступает перед аудиторией" loading="lazy" /></figure>
            <figure><img src={asset('/assets/lecture-hall-2.jpg')} alt="Аудитория на выступлении Константина Юманова" loading="lazy" /></figure>
          </div>

          <blockquote className="quote">
            <p>«Пока вы не начнёте замечать свои автоматические действия, они будут управлять вашей жизнью, а вы назовёте это судьбой».</p>
            <cite>К. Г. Юнг</cite>
          </blockquote>
        </div>
      </section>

      <section
        className="section audience"
        id="audience"
        aria-labelledby="audience-title"
        style={{
          backgroundImage: `linear-gradient(rgba(69, 43, 35, 0.2), rgba(69, 43, 35, 0.2)), url('${asset('/assets/audience-bg-v2.png')}')`,
        }}
      >
        <div className="section-shell audience-shell">
          <p className="section-label light">Кому подойдёт программа</p>
          <h2 id="audience-title">Это полезно тем, кто:</h2>
          <div className="audience-list">
            {audienceItems.map((item) => (
              <article className="audience-item" key={item.text}>
                <img src={asset(item.icon)} alt="" aria-hidden="true" />
                <div>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="audience-cta-card">
            <p>Не нужно становиться сильнее или слабее. Нужно перестать тратить силу на деструктивный сценарий.</p>
            <Cta>Принять участие в программе</Cta>
          </div>
        </div>
      </section>

      <section className="section results" id="results" aria-labelledby="results-title">
        <div className="section-shell results-shell">
          <p className="section-label">После прохождения</p>
          <h2 id="results-title">Результаты, которые останутся с вами.</h2>
          <div className="results-grid">
            {results.map((result, index) => (
              <article className="result-card" key={result.title}>
                <div className="result-topline">
                  <img src={asset(result.icon)} alt="" aria-hidden="true" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{result.title}</h3>
                <p>{result.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section program" id="program" aria-labelledby="program-title">
        <div className="section-shell program-shell">
          <p className="section-label light">Авторская методология</p>
          <h2 id="program-title">7 шагов к автономии.</h2>
          <p className="program-intro">
            Матрица решений разделена на чёткие алгоритмические этапы. Никакой абстрактной философии —
            только пошаговая проработка, таблицы, протоколы и реальные действия.
          </p>
          <div className="module-list">
            {modules.map((module) => (
              <article className="module-card" key={module.week}>
                <span className="module-number">{module.week}</span>
                <div className="module-copy">
                  <p className="module-label">Неделя {Number(module.week)}</p>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </div>
              </article>
            ))}
          </div>
          <article className="integration-card">
            <div className="integration-number">+28</div>
            <div>
              <p className="module-label">Дней практической интеграции</p>
              <h3>Закрепляем результат в реальной жизни.</h3>
              <p>Наблюдаем откаты, утверждаем новые привычки и интегрируем знания в устойчивые навыки под руководством ментора и в сообществе единомышленников.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section pricing" id="pricing" aria-labelledby="pricing-title">
        <div className="section-shell pricing-shell">
          <p className="section-label">Варианты участия</p>
          <h2 id="pricing-title">Выберите глубину сопровождения.</h2>
          <p className="pricing-intro">Во всех пакетах — единая методология, последовательная программа и практические материалы.</p>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.badge && <span className="price-badge">{plan.badge}</span>}
                <p className="price-name">{plan.name}</p>
                <h3>{plan.promise}</h3>
                <p className="price-duration">{plan.duration}</p>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Cta className="price-cta" href={plan.paymentUrl}>Оформить {plan.name}</Cta>
              </article>
            ))}
          </div>
          <p className="pricing-note">Выберите подходящий класс и перейдите к оформлению участия.</p>
        </div>
      </section>

      <section className="section format" aria-labelledby="format-title">
        <div className="section-shell format-shell">
          <p className="section-label">Как всё проходит</p>
          <h2 id="format-title">Глубоко, бережно и применимо к вашей жизни.</h2>
          <div className="format-list">
            {formatItems.map((item) => (
              <article className="format-item" key={item.number}>
                <span className="format-number">{item.number}</span>
                <img src={asset(item.icon)} alt="" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section author" id="author" aria-labelledby="author-title">
        <div className="section-shell author-shell">
          <p className="section-label light">Автор и ведущий</p>
          <h2 id="author-title">Константин Александрович Юманов.</h2>
          <p className="author-profession">Социальный педагог — практический психолог</p>
          <div className="author-layout">
            <figure className="author-photo">
              <img src={asset('/assets/author-konstantin.jpg')} alt="Константин Александрович Юманов" loading="lazy" />
            </figure>
            <dl className="credentials">
              {credentials.map(([title, text]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <article className="case-card">
            <p className="case-label">Кейс из практики</p>
            <h3>Из режима директора — к партнёрству на равных.</h3>
            <p>Владелица SPA-салона пришла с 4-летним одиночеством внутри отношений и контролем, который не выключался дома. После пошагового разбора автоматических реакций и перестройки личных границ она за 8 месяцев создала стабильные партнёрские отношения, сохранив позиции и контроль в бизнесе.</p>
          </article>
        </div>
      </section>

      <section className="section reviews" aria-labelledby="reviews-title">
        <div className="section-shell reviews-shell">
          <p className="section-label">Отзывы</p>
          <h2 id="reviews-title">Истории тех, кто уже начал жить по своим правилам.</h2>
          <div className="review-grid">
            {reviews.map(([src, alt], index) => (
              <article className="review-card" key={src}>
                <img src={asset(src)} alt={alt} loading="lazy" />
                <a href={asset(src)} target="_blank" rel="noreferrer" aria-label={`Открыть отзыв ${index + 1} в полном размере`}>Открыть</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-shell">
          <p className="section-label">Остались вопросы?</p>
          <h2 id="contact-title">Уточните, подойдёт ли программа именно вам.</h2>
          <p className="contact-copy">Напишите напрямую Константину Юманову — без сложных форм и ожидания ответа менеджера.</p>
          <div className="contact-links">
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer"><span>Telegram</span><strong>@umanko4</strong></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+375 29 659-70-50</strong></a>
          </div>
          <p className="contact-promise">Позвольте себе выдохнуть и начать жить по собственным правилам, а не играть навязанные роли.</p>
          <Cta className="final-cta">Принять участие в 7-недельной программе</Cta>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#hero-title">Анти-грабли</a>
        <p>ИП Юманов Константин Александрович · УНП 193001455</p>
        <nav className="legal-links" aria-label="Юридические документы">
          <a href={asset('/documents/public-offer.docx')} target="_blank" rel="noreferrer">Публичная оферта</a>
          <a href={asset('/documents/personal-data-policy.docx')} target="_blank" rel="noreferrer">Политика обработки персональных данных</a>
          <a href={asset('/documents/cookie-policy.docx')} target="_blank" rel="noreferrer">Политика обработки куки</a>
        </nav>
        <p className="copyright">Все права защищены © 2026</p>
      </footer>
    </main>
  );
}
