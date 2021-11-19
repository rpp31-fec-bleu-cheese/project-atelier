import React from 'React';
import PropTypes from 'prop-types';

class ReviewModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      Comfort: '',
      Fit: '',
      Length: '',
      Quality: '',
      Size: '',
      Width: '',
      bodyLength: 0
    };
  }

  componentDidMount() {
    let textarea = document.querySelector("textarea");
    textarea.addEventListener("input", event => {
        const target = event.currentTarget;
        const currentLength = target.value.length;

        if (currentLength < 60) {
          document.getElementById('BodyCharCount').innerHTML= `Minimum required characters left: ${60 - currentLength}`;
        } else {
          document.getElementById('BodyCharCount').innerHTML = `Minimum reached`;
        }
    });
  }

  starClick(e) {
    this.setState({
      rating: e.target.id.slice(9)
    });
  }

  categoryClick(e) {
    let categories = {
      Comfort: [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'
      ],
      Fit: [
        'Runs tight',
        'Runs slightly tight',
        'Perfect',
        'Runs slightly long',
        'Runs long'
      ],
      Length: [
        'Runs short',
        'Runs slightly short',
        'Perfect',
        'Runs slightly long',
        'Runs long'
      ],
      Quality: [
        'Poor',
        'Below average',
        'What I expected',
        'Pretty great',
        'Perfect'
      ],
      Size: [
        'A size too small',
        '½ a size too small',
        'Perfect',
        '½ a size too big',
        'A size too wide'
      ],
      Width: [
        'Too narrow',
        'Slightly narrow',
        'Perfect',
        'Slightly wide',
        'Too wide'
      ]
    };
    let category = e.target.id.split('_')[0];
    let rank = +e.target.id.split('_')[1]
    this.setState({
      [category]: categories[category][rank - 1]
    })
  }

  onClick() {
    let form = document.getElementById('ReviewForm');
    let data = new FormData(form);
    console.log(data.get('Recommend'))
    console.log(data.get('NickName'))
  }

  categoryElement(cat) {
    let _ = Array(5).fill('');

    return (
      <>
        <span style={{alignSelf: 'center', justifySelf: 'end'}}>{`${cat}: `}</span>
        <div style={{width: 160, alignSelf: 'center', justifySelf: 'center'}}>
          {
            _.map((__, j) => {
              return (
                <>
                  <input type='radio' id={`${cat}_${j + 1}`} value={j + 1} name={cat} onClick={this.categoryClick.bind(this)}></input>
                  <label htmlFor={`${cat}_${j + 1}`}>{j + 1}</label>
                </>
              )
            })
          }
        </div>
        <span style={{fontSize: 12, alignSelf: 'center'}}>{this.state[cat]}</span>
      </>
    );
  }

  render() {
    let stars = new Array(5).fill('\u2605');
    let starDesc = {
      1: 'Poor',
      2: 'Fair',
      3: 'Average',
      4: 'Good',
      5: 'Great'
    };
    let categories = [
      'Comfort',
      'Fit',
      'Length',
      'Quality',
      'Size',
      'Width'
    ];

    return (
      <div id='Modal'>
        <form id='ReviewForm'>
          <div id='ReviewFormHeader'>
            <h1 style={{fontSize: 30}} onClick={this.onClick.bind(this)}>Write Your Review</h1>
            <h2>About The *Current Product*</h2>
          </div>
          <div id='ReviewUserInfo' className='WriteContainer'>
            <label htmlFor='NickName'>Nickname*:</label>
            <input type='text' id='NickName' name='NickName' minLength='4' maxLength='60' placeholder='4 to 60 characters...'></input>
            <label htmlFor='Email'>Email*:</label>
            <input type='email' id='Email' name='Email'></input>
          </div>
          <div id='ReviewFormRating' className='WriteContainer'>
            <div style={{display: 'inline-block'}}>Rating*:</div>
            <div id='WriteStarContainer' style={{display: 'inline-block'}}>
              <div className='Stars'>
                <div className='empty-stars-write-review'>
                  {stars.map((star, i) => {
                  return (
                    <span
                      id={'WriteStar' + (i + 1)}
                      className='WriteStar'
                      onClick={this.starClick.bind(this)}
                      style={((i + 1) * 20  <= this.state.rating * 20) ? {color: '#fde16d', WebkitTextStroke: '1px #ffa600'} : {}}
                      key={i}>
                        {star}
                    </span>
                  )})}
                </div>
              </div>
            </div>
            <span style={{fontSize: 12}}>{starDesc[this.state.rating]}</span>
          </div>
          <div id='ReviewRecommend' className='WriteContainer'>
            <span>Do you recommend this product?*</span>
            <input type='radio' id='RecommendYes' value='Yes' name='Recommend' defaultChecked></input>
            <label htmlFor='RecommendYes'>Yes</label>
            <input type='radio' id='RecommendNo' value='No' name='Recommend'></input>
            <label htmlFor='RecommendNo'>No</label>
          </div>
          <div id='ReviewCharacteristics'>
            <div id='ReviewCategoryTitle' className='WriteContainer'>
              <span>Characteristics:</span><span style={{fontSize: 12}}>Choose all that apply</span>
            </div>
            <div id='ReviewCategoryContainer'>
              {categories.map((cat, i) => this.categoryElement(cat))}
            </div>
          </div>
          <div className='WriteContainer'>
            <label htmlFor='ReviewSummary'>Summary*:</label>
            <input type='input' id='ReviewSummary' name='Summary' maxLength='60' placeholder='Example: Best purchase ever!' style={{width: 300}}></input>
          </div>
          <div id='ReviewBodyContainer' className='WriteContainer'>
            <label htmlFor='ReviewBody' style={{alignSelf: 'start', justifySelf: 'end'}}>Review*:</label>
            <textarea
              id='ReviewBody'
              name='ReviewBody'
              minLength='50'
              maxLength='1000'
              placeholder='Example: Best purchase ever!'style={{width: 400, height: 100, resize: 'none'}}>
            </textarea>
            <span id='BodyCharCount' style={{fontSize: 10, gridColumn: 2}}>Minimum required characters left: 60</span>
          </div>
          <div className='WriteContainer'>
            <label htmlFor='ReviewFileUpload'>Images: </label>
            <input type='file' id='ReviewFileUpload'></input>
          </div>
        </form>
      </div>
    );
  }
};

ReviewModal.propTypes = {
  onsubmit: PropTypes.func.isRequired,
};

export default ReviewModal;