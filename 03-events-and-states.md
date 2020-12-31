- для компонента, где динамические данные, ф-ции типа хуки не подходят
- компонент класса возвращает значение, но при этом state хранит динамические
  данные
- чтобы превратить ф-цию в класс, для вставки динамики нужно наследовать или
  расширять базовый компонент React.Components (extends)
- компоненты класса:
  - class
  - extends
  - сonstructor ()
  - render ()
- render () {return ()} должен возвращать только разметку!

--- инлайн колбеки

- события пишутся onСобытие
- в реакте уже реализовано глобальное делегирование x() => {}
- при передаче метода объекта как колбека в какой-то обработчик события, у
  объекта не привязывается контекст по-умолчани, поэтому объявляется публичное
  свойство через равно x = () => {}
- event работает только в синхронном коде, после снятия со стека он очищается,
  gjcле выполненого действия setTimeout не сработает [null] setTimeot(() => {
  console.log(target); }, 1000);
- он сработает в случае, если сохранить свойство на объект в переменную const
  target = event.target