import {MDBCol, MDBInput} from "mdbreact";
import React from "react";


class Filters extends React.Component  {
   constructor(props) {
       super(props)

       this.state = {
           subtype: {},
           apps: {},
           brands: {},
           serias: {},
           gender: {},
           price_min: 0,
           price_max: 2000,
           subtypeArray: [],
           appArray: [],
           brandArray: [],
           seriaArray: [],
           genderArray: []


       }

       this.chooseSubtypeHandle = this.chooseSubtypeHandle.bind(this)
       this.chooseAppHandle = this.chooseAppHandle.bind(this)
       this.chooseBrandHandle = this.chooseBrandHandle.bind(this)
       this.chooseSeriaHandle = this.chooseSeriaHandle.bind(this)
       this.chooseGenderHandle = this.chooseGenderHandle.bind(this)

   }


      subtypeArray = [
            {slug: 'shampoo',    label: 'Шампуні'},
            {slug: 'mask',       label: 'Маски для волосся'},
            {slug: 'balm',       label: 'Бальзами для волосся'},
            {slug: 'scrab',      label: 'Скраби для тіла'},
            {slug: 'cream',      label: 'Креми для тіла'},
            {slug: 'gel',        label: 'Гелі для душа'},
            {slug: 'facecream',  label: 'Креми для обличчя'},
            {slug: 'facescrub',  label: 'Скраби для обличчя'},
            {slug: 'facemask',   label: 'Маски для обличчя'},
            {slug: 'washface',   label: 'Вмивання обличчя'},
            {slug: 'tonik',      label: 'Тоніки для обличчя'},
            {slug: 'fito',       label: 'Фітокомплекси'},
            {slug: 'goodfood',   label: 'Добра їжа'},
            {slug: 'forhome',    label: 'Засоби для дому'}
    ]

    appArray = [
            {slug: 'hair',       label: 'Догляд за волоссям'},
            {slug: 'body',       label: 'Догляд за тілом'},
            {slug: 'face',       label: 'Догляд за обличчям'},
            {slug: 'home',       label: 'Догляд за домівкою'},
            {slug: 'health',     label: 'Догляд за здоров`ям'}
        ]

    brandArray = [
            {slug: 'choice',           label: 'Choice'},
            {slug: 'whitemandarin',    label: 'White Mandarin'},
            {slug: 'goodfood',         label: 'Good Food'},
            {slug: 'greenmax',         label: 'Green Max'}

        ]

    seriaArray = [
            {slug: 'medova',           label: 'Серія Медова'},
            {slug: 'tsitrus',          label: 'Серія Цитрус'},
            {slug: 'sakska',           label: 'Серія Сакська глина'},
            {slug: 'travi',            label: 'Серія Цілющі трави'},
            {slug: 'lik',              label: 'Серія Lik'},
            {slug: 'jivlenia',         label: 'Живлення та очищення'},
            {slug: 'zwolojenia',       label: 'Зволоження і захист'},
            {slug: 'forchild',         label: 'Серія Дитяча'}

        ]


    genderArray = [
        {slug: 'woman',           label: 'Для жінок'},
        {slug: 'man',          label: 'Для чоловіків'},
        {slug: 'child',           label: 'Для дітей'},
        {slug: 'young',            label: 'Для підлітків'}
    ]

    componentDidMount(props) {
        this.setState({
            subtypeArray:this.subtypeArray,
            appArray:this.appArray,
            brandArray:this.brandArray,
            seriaArray:this.seriaArray,
            genderArray:this.genderArray
        })
    }





    chooseSubtypeHandle(event) {
        const input = event.target
        let subtype = {...this.state.subtype}
        if(input.checked) {
            subtype[input.value] = 1
        } else {
            delete subtype[input.value]
        }
        this.props.setFilterSubtype(subtype)
        this.setState(subtype)
    }

    chooseAppHandle(event) {
        const input = event.target
        let apps = {...this.state.apps}
        if(input.checked) {
            apps[input.value] = 1
        } else {
            delete apps[input.value]
        }
        this.props.setFilterApp(apps)
        this.setState(apps)
    }

    chooseBrandHandle(event) {
       const input = event.target
        let brands = {...this.state.brands}
        if(input.checked) {
            brands[input.value] = 1
        }else {
            delete brands[input.value]
        }
        this.props.setFilterBrand(brands)
        this.setState(brands)
    }

    chooseSeriaHandle(event) {
        const input = event.target.value
        let serias = {...this.state.serias}
        if(input.checked) {
            serias[input.value] = 1
        }else {
            delete serias[input.value]
        }
        this.props.setFilterSeria(serias)
        this.setState(serias)
    }

    chooseGenderHandle(event) {
        let choosenValue = event.target.value
        let gender = {...this.state.gender}
        if (event.target.checked) {
            gender[choosenValue]= 1
        }else{
            delete gender[choosenValue]
        }
        console.log(gender)
        this.props.setFilterGender(gender)
        this.setState({gender})
    }



    minPriceChange = (e) => {
        this.setState({price_min: parseInt(e.target.value)})
        this.props.setFilterPrice('min', parseInt(e.target.value))
    }

    maxPriceChange = (e) => {
        this.setState({price_max: parseInt(e.target.value)})
        this.props.setFilterPrice('max', parseInt(e.target.value))
    }

    render() {
        return (
            <div className='filter filter-basic'>
                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5 filters'>
                    <p className='m-2 mb-3 font-weight-bold'>ВИД ПРОДУКЦІЇ</p>
                    {this.state.subtypeArray.map((subtype) => (
                        <MDBInput key={subtype.slug} value={subtype.slug}   onChange={this.chooseSubtypeHandle} label={subtype.label} type='checkbox' id={subtype.slug} className='check-item'/>
                    ))}
                </div>
                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                    <p className='m-2 mb-3 font-weight-bold'>ПРИЗНАЧЕННЯ</p>
                    {this.state.appArray.map((app) => (
                        <MDBInput key={app.slug} value={app.slug}   onChange={this.chooseAppHandle} label={app.label}  type='checkbox' id={app.slug} className='check-item'/>
                    ))}
                    </div>
                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                    <p className='m-2 mb-3 font-weight-bold'>ТОРГОВА МАРКА</p>
                    {this.state.brandArray.map((brand) => (
                        <MDBInput key={brand.slug} value={brand.slug} onChange={this.chooseBrandHandle} label={brand.label} type='checkbox' id={brand.slug} className='check-item'/>
                    ))}
                 </div>
                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                    <p className='m-2 font-weight-bold'>СЕРІЯ</p>
                    {this.state.seriaArray.map((seria) => (
                        <MDBInput key={seria.slug} value={seria.slug} onChange={this.chooseSeriaHandle} label={seria.label} type='checkbox' id={seria.slug} className='check-item'/>
                    ))}
                </div>
                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                    <p className='m-2 mb-3 font-weight-bold'>КАТЕГОРІЯ</p>
                    {this.state.genderArray.map((gender) => (
                        <MDBInput key={gender.slug} value={gender.slug} onChange={this.chooseGenderHandle} label={gender.label} type='checkbox' id={gender.slug} className='check-item'/>
                    ))}
                </div>
                <div className='mb-4 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-5'>
                    <p className='m-2 mb-3 font-weight-bold'>ЦІНА</p>
                    <div className='d-flex'>
                        <form className='multi-range-field w-50 w-auto'>
                            <p>from:{this.state.price_min} to {this.state.price_max}</p>
                            <div className='d-inline-flex'>
                                <input className='my-3 mx-2 w-25' onChange={this.minPriceChange} id='min' value={this.state.price_min} type='number' placeholder='Від'></input>
                                <p className=' my-3 mx-3'>-</p>
                                <input className='my-3 mx-2 w-25' onChange={this.maxPriceChange} id='max' value={this.state.price_max} type='number' placeholder='До'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}


export default Filters;