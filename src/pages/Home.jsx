import React, { useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Slider } from '@mui/material';
import MyButton from '../components/Ui/button/MyButton'
import MySelect from '../components/Ui/select/MySelect';
import { useEffect } from 'react';




function Home() {
  const [selectedStore, setSelectedStore] = useState('939');
  const [sumOfCredit, setSumOfCredit] = useState(1000);
  const [periodOfCredit, setPeriodOfCredit] = useState(15);
  const [fee, setFee] = useState(75);

  const [customerData, setCustomerData] = useState({
    fullName: '',
    phoneNumber: null,
    whoHasTo: '',
    averageMonthlyIncome: null,
    fullNameSecond: '',
    phoneNumberSecond: '',
    whoHasToSecond: '',
  });
  const [fullNameDirty, setFullNameDirty] = useState(false);
  const [phoneNumberDirty, setPhoneNumberDirty] = useState(false);
  const [whoHasToDirty, setWhoHasToDirty] = useState(false);
  const [averageMonthlyIncomeDirty, setAverageMonthlyIncomeDirty] = useState(false);

  const [fullNameError, setFullNameError] = useState('Не заполнено поле ФИО');
  const [phoneNumberError, setPhoneNumberError] = useState('Не заполнено поле Номер телефона');
  const [whoHasToError, setWhoHasToError] = useState('Не заполнено поле Кем приходится');
  const [averageMonthlyIncomeError, setAverageMonthlyIncomeError] = useState('Не заполнено поле Среднемесячный доход');


  const [fullNameDirtySecond, setFullNameDirtySecond] = useState(false);
  const [phoneNumberDirtySecond, setPhoneNumberDirtySecond] = useState(false);
  const [whoHasToDirtySecond, setWhoHasToDirtySecond] = useState(false);


  const [fullNameErrorSecond, setFullNameErrorSecond] = useState('Не заполнено поле ФИО');
  const [phoneNumberErrorSecond, setPhoneNumberErrorSecond] = useState('Не заполнено поле Номер телефона');
  const [whoHasToErrorSecond, setWhoHasToErrorSecond] = useState('Не заполнено поле Кем приходится');

  const [formValid, setFormValid] = useState(false);

  useEffect(()=>{
    if(fullNameError ||phoneNumberError ||averageMonthlyIncomeError ||fullNameErrorSecond || phoneNumberErrorSecond ||whoHasToErrorSecond){
      setFormValid(false)
    }
    else{
      setFormValid(true)
    }
  },[fullNameError,phoneNumberError,averageMonthlyIncomeError,fullNameErrorSecond,phoneNumberErrorSecond,whoHasToErrorSecond,])

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "full_name":
        setFullNameDirty(true);
        break;
      case "phone_number":
        setPhoneNumberDirty(true);
        break;
      case "who_has_to_dirty":
        setWhoHasToDirty(true);
        break;
      case "average_monthly_income_dirty":
        setAverageMonthlyIncomeDirty(true);
        break;
      case "full_name_second":
        setFullNameDirtySecond(true);
        break;
      case "phone_number_second":
        setPhoneNumberDirtySecond(true);
        break;
      case "who_has_to_dirty_second":
        setWhoHasToDirtySecond(true);
        break;
    }
  }


  const AverageMonthlyIncomeHandler = (e) => {
    setCustomerData({ ...customerData, averageMonthlyIncome: e.target.value })
    if (e.target.value < 10000) {
      setAverageMonthlyIncomeError('Не достатончо ежемесечного дохода')
    }
    else {
      setAverageMonthlyIncomeError('')
    }
  }

  const fullNameHandler = (e) => {
    setCustomerData({ ...customerData, fullName: e.target.value })
    if (e.target.value.length < 2) {
      setFullNameError('Не правильно введено поле ФИО')
    }
    else {
      setFullNameError('')
    }
  }

  const phoneNumberHandler = (e) => {
    setCustomerData({ ...customerData, phoneNumber: e.target.value })
    if (e.target.value.length < 10) {
      setPhoneNumberError('Не правильно введено поле Номер телефона')
    }
    else {
      setPhoneNumberError('')
    }
  }

  const whoHasToHandler = (e) => {
    setCustomerData({ ...customerData, whoHasTo: e.target.value })
    if (e.target.value.length < 2) {
      setWhoHasToError('Не правильно введено поле Кем приходится')
    }
    else {
      setWhoHasToError('')
    }
  }

  const fullNameHandlerSecond = (e) => {
    setCustomerData({ ...customerData, fullNameSecond: e.target.value })
    if (e.target.value.length < 2) {
      setFullNameErrorSecond('Не правильно введено поле ФИО')
    }
    else {
      setFullNameErrorSecond('')
    }
  }

  const phoneNumberHandlerSecond = (e) => {
    setCustomerData({ ...customerData, phoneNumberSecond: e.target.value })
    if (e.target.value.length < 10) {
      setPhoneNumberErrorSecond('Не правильно введено поле Номер телефона')
    }
    else {
      setPhoneNumberErrorSecond('')
    }
  }

  const whoHasToHandlerSecond = (e) => {
    setCustomerData({ ...customerData, whoHasToSecond: e.target.value })
    if (e.target.value.length < 2) {
      setWhoHasToErrorSecond('Не правильно введено поле Кем приходится')
    }
    else {
      setWhoHasToErrorSecond('')
    }
  }
  console.log(sumOfCredit);
  console.log(periodOfCredit);
  return (
    <div>
      <Header />
      <main className='logMain'>
        <div className="container">
          <div className='jumbotron'>
            {selectedStore === '939'
              ?
              <div className="creditBlock">
                <div className="creditCreateBlock">
                  <h2>Получить кредит</h2>
                  <form>
                    <MySelect
                      id="selectCredits"
                      className='form-control'
                      value={selectedStore}
                      onChange={element => setSelectedStore(element)}
                    />

                    <div className='resultOfselect'>
                      <span>Сумма кредита:</span> <span>{sumOfCredit}</span>
                    </div>
                    <Slider
                      aria-label="sumOfCredit"
                      defaultValue={1000}
                      value={sumOfCredit}
                      onChange={e => setSumOfCredit(e.target.value)}
                      step={1000}
                      min={1000}
                      max={15000}
                    />
                    <div className='resultOfselect'>
                      <span>Срок погашения:</span> <span>{periodOfCredit}</span>
                    </div>
                    <Slider
                      aria-label="periodOfCredit"
                      defaultValue={15}
                      value={periodOfCredit}
                      onChange={e => setPeriodOfCredit(e.target.value)}
                      step={15}
                      min={15}
                      max={30}
                    />
                    <div className='resultOfselect'>
                      <span>Комиссия:</span> <span><b>{fee}</b> сом</span>
                    </div>
                    <p>
                      Оплата комиссии производится при пролучении кредита
                    </p>
                    <div className='resultOfselect'>
                      <span>Процентная ставка в месяц:</span> <span><b>7</b> %</span>
                    </div>
                    <div className='resultOfselect'>
                      <span>Номинальная годовая процентная ставка:</span> <span><b>84</b> %</span>
                    </div>
                    <p>
                      <b>
                        Погашение кредита производится в конце выбранного срока!
                      </b>
                    </p>
                    <div>
                      <span>Оплата в конце срока = 7245.00</span>
                    </div>
                    <hr className='logHR' />
                    <div>
                      <h3>Контактные данные:</h3>
                      <b>Данные первого контактного лица:</b>
                    </div>

                    <label for="inputContactName1">ФИО первого контакта</label>
                    <input type="name" value={customerData.fullName} onChange={e => fullNameHandler(e)} onBlur={e => blurHandler(e)} name="full_name" className='form-control' placeholder='Введите ФИО' required />
                    {(fullNameDirty && fullNameError) && <div style={{ color: "red" }}>{fullNameError}</div>}

                    <label for="inputContactName2">Номер телефона первого контакта</label>
                    <input type="phone" value={customerData.phoneNumber} onChange={e => phoneNumberHandler(e)} onBlur={e => blurHandler(e)} name="phone_number" className='form-control' placeholder='0(505)' required />
                    {(phoneNumberDirty && phoneNumberError) && <div style={{ color: "red" }}>{phoneNumberError}</div>}

                    <label for="inputContactName3">Кем приходится</label>
                    <input type="text" value={customerData.whoHasTo} onChange={e => whoHasToHandler(e)} onBlur={e => blurHandler(e)} name="who_has_to_dirty" className='form-control' placeholder='Кем приходится' required />
                    {(whoHasToDirty && whoHasToError) && <div style={{ color: "red" }}>{whoHasToError}</div>}
                    <div>
                      <b>Данные второго контактного лица:</b>
                    </div>


                    <label for="inputContactName1">ФИО первого контакта</label>
                    <input type="name" name="full_name_second" onChange={e=>fullNameHandlerSecond(e)} onBlur={e => blurHandler(e)} className='form-control' placeholder='Введите ФИО' required />
                    {(fullNameDirtySecond && fullNameErrorSecond) && <div style={{ color: "red" }}>{fullNameErrorSecond}</div>}
                    <label for="inputContactName2">Номер телефона первого контакта</label>
                    <input type="phone" name="phone_number_second" onChange={e=>phoneNumberHandlerSecond(e)} onBlur={e => blurHandler(e)} className='form-control' placeholder='0(505)' required />
                    {(phoneNumberDirtySecond && phoneNumberErrorSecond) && <div style={{ color: "red" }}>{phoneNumberErrorSecond}</div>}
                    <label for="inputContactName3">Кем приходится</label>
                    <input type="text" name="who_has_to_dirty_second" onChange={e=>whoHasToHandlerSecond(e)} onBlur={e => blurHandler(e)} className='form-control' placeholder='Кем приходится' required />
                    {(whoHasToDirtySecond && whoHasToErrorSecond) && <div style={{ color: "red" }}>{whoHasToErrorSecond}</div>}
                    <div>
                      <b>Рабочие данные:</b>
                    </div>
                    <label for="inputContactName3">Среднемесячный доход</label>
                    <input type="number" onBlur={e => blurHandler(e)} value={customerData.averageMonthlyIncome} onChange={e => AverageMonthlyIncomeHandler(e)} name="average_monthly_income_dirty" className='form-control' placeholder='Среднемесячный доход' required />
                    {(averageMonthlyIncomeDirty && averageMonthlyIncomeError) && <div style={{ color: "red" }}>{averageMonthlyIncomeError}</div>}

                    <label for="inputContactName3"><a href="#" className='underlineHover'>Я ознакомлен и согласен с условиями получения кредита</a></label>
                    <input type="checkbox" name="contact_fio" id="inputContactName4" placeholder='Среднемесячный доход' required />

                    <MyButton disabled={!formValid} style={{ marginTop: "1.2rem" }} type="submit" >Отправить заявку</MyButton>
                  </form>
                </div>

                <div className="descriptionOfCredit">
                  <h4 className='h4'>TEZАКЧА-MOBILE – возобновляемые быстрые кредиты предоставляемые в рамках револьверной кредитной линии</h4>
                  <ul>
                    <li>Сумма кредитной линии: 10 000 сом, в рамках данного лимита можно получить возобновляемые кредиты от 500 сом до 10 000 сом. </li>
                    <li>Срок кредитной линии: 12 месяцев, в рамках данного срока можно получить возобновляемые кредиты до 60 дней. </li>
                    <li>Процентная ставка: - 7% в месяц, только на использованную часть лимита (номинальная годовая процентная ставка 84%). </li>
                    <li>Комиссия: - в зависимости от суммы кредита от 61 сома до 275 сом, оплачивается при получении кредита. </li>
                    <li>Погашение кредита: ежемесячно, либо досрочно в любое время без взимания дополнительных комиссий. </li>
                  </ul>
                  <p>Кредиты выдаются без обеспечения на основании онлайн заявки. Срок рассмотрения в рабочее время ОАО «МФК «АБН»: в течение 30 минут!</p>
                </div>
              </div>
              :
              <div className="creditBlock">
                <div className="creditCreateBlock">
                  <h2>Получить кредит</h2>

                  <form>
                    <MySelect
                      id="selectCredits"
                      className='form-control'
                      value={selectedStore}
                      onChange={element => setSelectedStore(element)}
                    />

                    <div className='resultOfselect'>
                      <span>Сумма кредита:</span> <span> 1000 сом </span>
                    </div>
                    <Slider
                      aria-label="sumOfCredit"
                      defaultValue={1000}
                      valueLabelDisplay="auto"
                      step={1000}
                      min={1000}
                      max={15000}
                    />
                    <div className='resultOfselect'>
                      <span>Срок погашения:</span> <span>15 дней</span>
                    </div>
                    <Slider
                      aria-label="sumOfCredit"
                      defaultValue={15}
                      valueLabelDisplay="auto"
                      step={15}
                      min={15}
                      max={30}
                    />
                    <div className='resultOfselect'>
                      <span>Комиссия:</span> <span><b>34</b> сом</span>
                    </div>
                    <p>
                      Оплата комиссии производится при пролучении кредита
                    </p>
                    <div className='resultOfselect'>
                      <span>Процентная ставка в месяц:</span> <span><b>7</b> %</span>
                    </div>
                    <div className='resultOfselect'>
                      <span>Номинальная годовая процентная ставка:</span> <span><b>84</b> %</span>
                    </div>
                    <p>
                      <b>
                        Погашение кредита производится ежемесячно равными долями!
                      </b>
                    </p>
                    <div>
                      <span>Ежемесячный платеж до конца срока кредита 6453.66</span>
                    </div>
                    <hr className='logHR' />
                    <div>
                      <h3>Контактные данные:</h3>
                      <b>Данные первого контактного лица:</b>
                    </div>

                    <label for="inputContactName1">ФИО первого контакта</label>
                    <input type="name" value={customerData.fullName} onChange={e => fullNameHandler(e)} onBlur={e => blurHandler(e)} name="full_name" className='form-control' placeholder='Введите ФИО' required />
                    {(fullNameDirty && fullNameError) && <div style={{ color: "red" }}>{fullNameError}</div>}

                    <label for="inputContactName2">Номер телефона первого контакта</label>
                    <input type="phone" value={customerData.phoneNumber} onChange={e => phoneNumberHandler(e)} onBlur={e => blurHandler(e)} name="phone_number" className='form-control' placeholder='0(505)' required />
                    {(phoneNumberDirty && phoneNumberError) && <div style={{ color: "red" }}>{phoneNumberError}</div>}

                    <label for="inputContactName3">Кем приходится</label>
                    <input type="text" value={customerData.whoHasTo} onChange={e => whoHasToHandler(e)} onBlur={e => blurHandler(e)} name="who_has_to_dirty" className='form-control' placeholder='Кем приходится' required />
                    {(whoHasToDirty && whoHasToError) && <div style={{ color: "red" }}>{whoHasToError}</div>}
                    <div>
                      <b>Данные второго контактного лица:</b>
                    </div>


                    <label for="inputContactName1">ФИО первого контакта</label>
                    <input type="name" name="full_name_second" onChange={e=>fullNameHandlerSecond(e)} onBlur={e => blurHandler(e)} className='form-control' placeholder='Введите ФИО' required />
                    {(fullNameDirtySecond && fullNameErrorSecond) && <div style={{ color: "red" }}>{fullNameErrorSecond}</div>}
                    <label for="inputContactName2">Номер телефона первого контакта</label>
                    <input type="phone" name="phone_number_second" onChange={e=>phoneNumberHandlerSecond(e)} onBlur={e => blurHandler(e)} className='form-control' placeholder='0(505)' required />
                    {(phoneNumberDirtySecond && phoneNumberErrorSecond) && <div style={{ color: "red" }}>{phoneNumberErrorSecond}</div>}
                    <label for="inputContactName3">Кем приходится</label>
                    <input type="text" name="who_has_to_dirty_second" onChange={e=>whoHasToHandlerSecond(e)} onBlur={e => blurHandler(e)} className='form-control' placeholder='Кем приходится' required />
                    {(whoHasToDirtySecond && whoHasToErrorSecond) && <div style={{ color: "red" }}>{whoHasToErrorSecond}</div>}
                    <div>
                      <b>Рабочие данные:</b>
                    </div>
                    <label for="inputContactName3">Место работы</label>
                    <input type="text" name="contact_fio" className='form-control' placeholder='Место работы' required />

                    <label for="inputContactName3">Должность</label>
                    <input type="text" name="contact_fio" className='form-control' placeholder='Должность' required />

                    <label for="inputContactName3">Среднемесячный доход</label>
                    <input type="number" name="contact_fio" className='form-control' placeholder='Среднемесячный доход' required />

                    <label for="inputContactName3">Справка с места жительства</label>
                    <input type="file" name="contact_fio" className='form-control' placeholder='Среднемесячный доход' required />

                    <label for="inputContactName3">Справка о доходах</label>
                    <input type="file" name="contact_fio" className='form-control' placeholder='Среднемесячный доход' required />

                    <label for="inputContactName3"><a href="#" className='underlineHover'>Я ознакомлен и согласен с условиями получения кредита</a></label>
                    <input type="checkbox" name="contact_fio" id="inputContactName4" placeholder='Среднемесячный доход' required />

                    <MyButton disabled={!formValid} style={{ marginTop: "1.2rem" }} type="submit" >Отправить заявку</MyButton>
                  </form>
                </div>

                <div className="descriptionOfCredit">
                  <h4 className='h4'>TEZАКЧА – быстрые кредиты</h4>
                  <ul>
                    <li>Сумма кредита: от 10 000 сом до 30 000 сом</li>
                    <li>Срок кредита: до 5 месяцев</li>
                    <li>Процентная ставка: - 5% в месяц (номинальная годовая процентная ставка 60%)</li>
                    <li>Комиссия: - в зависимости от суммы кредита от 170 до 350 сом, оплачивается при получении кредита. </li>
                    <li>Погашение кредита: ежемесячно, либо досрочно в любое время без взимания дополнительных комиссий.  </li>
                  </ul>
                  <p>Кредиты выдаются без обеспечения на основании онлайн заявки и подтверждающих документов. Срок рассмотрения в рабочее время ОАО «МФК «АБН»: в течение 1 часа!</p>
                </div>
              </div>
            }
          </div>
        </div>
      </main>
      <Footer />
    </div>

  )
}

export default Home;