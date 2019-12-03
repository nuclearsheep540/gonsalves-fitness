import React from 'react'

export default class Landing extends React.Component {
  constructor() {
    super()

    this.state = {
      formData: {

      }
    }
    //binds
  }
  //functions

  render() {
    return (
      <main>

        <section className='hero'>
          <h1 className='middle-center central'>GONSALVES FITNESS</h1>
        </section>

        <div className='flex-wrap middle-center'>
          <section className='flex-container s16' id='1'>
            <p>Laboris minim magna non voluptate. Laborum cillum nisi elit dolore cillum dolor. Laboris consequat in aliquip cillum dolor sunt nostrud ex aliquip consectetur officia in cupidatat ex. Anim laborum laboris magna ea laboris. Amet laboris dolor exercitation pariatur enim sit in adipisicing commodo velit. Est dolore est tempor laborum excepteur eiusmod amet fugiat dolore consectetur reprehenderit fugiat ad quis. Ea nostrud nostrud Lorem fugiat aliquip et veniam est qui magna ad.</p>
          </section>

          <section className='flex-container'>
            <img className='sect' src='https://i.imgur.com/8452IOt.png' />
          </section>

          <section className='flex-container s16' id='2'>
            <p>Laboris minim magna non voluptate. Laborum cillum nisi elit dolore cillum dolor. Laboris consequat in aliquip cillum dolor sunt nostrud ex aliquip consectetur officia in cupidatat ex. Anim laborum laboris magna ea laboris. Amet laboris dolor exercitation pariatur enim sit in adipisicing commodo velit. Est dolore est tempor laborum excepteur eiusmod amet fugiat dolore consectetur reprehenderit fugiat ad quis. Ea nostrud nostrud Lorem fugiat aliquip et veniam est qui magna ad.</p>
          </section>

          <section className='flex-container'>
            <img className='sect' src='https://i.imgur.com/8452IOt.png' />
          </section>

          <section className='flex-container s16' id='3'>
            <p>Laboris minim magna non voluptate. Laborum cillum nisi elit dolore cillum dolor. Laboris consequat in aliquip cillum dolor sunt nostrud ex aliquip consectetur officia in cupidatat ex. Anim laborum laboris magna ea laboris. Amet laboris dolor exercitation pariatur enim sit in adipisicing commodo velit. Est dolore est tempor laborum excepteur eiusmod amet fugiat dolore consectetur reprehenderit fugiat ad quis. Ea nostrud nostrud Lorem fugiat aliquip et veniam est qui magna ad.</p>
          </section>

          <section className='flex-container'>
            <img className='sect' src='https://i.imgur.com/8452IOt.png' />
          </section>

          <section className='flex-container s16' id='4'>
            <p>Laboris minim magna non voluptate. Laborum cillum nisi elit dolore cillum dolor. Laboris consequat in aliquip cillum dolor sunt nostrud ex aliquip consectetur officia in cupidatat ex. Anim laborum laboris magna ea laboris. Amet laboris dolor exercitation pariatur enim sit in adipisicing commodo velit. Est dolore est tempor laborum excepteur eiusmod amet fugiat dolore consectetur reprehenderit fugiat ad quis. Ea nostrud nostrud Lorem fugiat aliquip et veniam est qui magna ad.</p>
          </section>
        </div>
        <footer className='centered'>
          <p className='middle-center central'>things</p>
          <p className='middle-center central'>things</p>
          <p className='middle-center central'>and morethings</p>
        </footer>
      </main>
    )
  }

}