import React from 'React';
import PropTypes from 'prop-types';
import $ from 'jquery';

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
      images: []
    }
  }

  componentDidMount() {
    let textarea = document.querySelector("textarea");
    textarea.addEventListener("input", event => {
      const target = event.currentTarget;
      const currentLength = target.value.length;

      if (currentLength < 50) {
        document.getElementById('BodyCharCount').innerHTML= `Minimum required characters left: ${50 - currentLength}`;
      } else {
        document.getElementById('BodyCharCount').innerHTML = `Minimum reached`;
      }
    });

    /////////////////////////

    let filesInput = document.getElementById("ReviewFileUpload");
    let setState = this.setState.bind(this);
    let handleFile = function() {
      let asyncFiles = [];

      let promisedReader = data => {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.onload = () => {
            let validImageTypes = ['data:image/jpeg', 'data:image/png'];
            let imageType = reader.result.split(';')[0];

            if (!validImageTypes.includes(imageType)) reject('Invalid file')
            else resolve(reader.result);
          };
          reader.onerror = () => {
            reject();
          }
          reader.readAsDataURL(data);
        })
      };

      for (let img in this.files) {
        if (this.files.hasOwnProperty(img)) asyncFiles.push(promisedReader(this.files[img]));
      }
      Promise.all(asyncFiles)
        .then(results => {
          if (results.length > 5) {
            alert('You have selected more than 5 images.  Please try again.')
          } else {
            setState({images: results})
          }
        })
        .catch(err => {
          if (err === 'Invalid file') {
            alert('You have selected an invalid file type.  Please try again.');
            filesInput.value = '';
          }
          else console.log(err)
        });
    };

    filesInput.addEventListener("change", handleFile, false);
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

  formSubmit() {
    let form = document.getElementById('ReviewForm');

    if (!form.checkValidity() || this.state.rating === 0) {
      alert('Please check that all required fields are filled.');
      return;
    }

    let data = new FormData(form);
    let userData = {};
    let characteristics = {};
    let categories = {
      Fit: 'Fit',
      Comfort: 'Comfort',
      Length: 'Length',
      Quality: 'Quality',
      Size: 'Size',
      Width: 'Width'
    };

    for (let pair of data.entries()) {
      if (!Number.isNaN(+pair[0])) characteristics[pair[0].toString()] = +pair[1]
      else userData[pair[0]] = pair[1];
    }

    userData.product_id = this.props.product_id
    userData.rating = +this.state.rating;
    userData.photos = this.state.images;
    userData.characteristics = characteristics;
    (userData.recommend === 'true') ? userData.recommend = true : userData.recommend = false;

    console.log(userData)
    $.ajax({
      url: '/reviews',
      method: 'POST',
      data: userData,
      success: data => {
        alert('Review submitted!')
        this.props.closeModal();
      },
      error: (_, __, errString) => console.log(errString)
    })
  }

  categoryElement(cat) {
    let _ = Array(5).fill('');

    if (cat in this.props.characteristics) {
      return (
        <>
          <span style={{alignSelf: 'center', justifySelf: 'end'}}>{`${cat}: `}</span>
          <div style={{width: 160, alignSelf: 'center', justifySelf: 'center'}}>
            {
              _.map((__, j) => {
                return (
                  <>
                    <input
                      type='radio'
                      id={`${cat}_${j + 1}`}
                      value={j + 1}
                      name={this.props.characteristics[cat].id}
                      onClick={this.categoryClick.bind(this)}></input>
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
            <h1 style={{fontSize: 30}}>Write Your Review</h1>
            <h2>About The *Current Product*</h2>
          </div>
          <div id='ReviewUserInfo' className='WriteContainer'>
            <label htmlFor='name'>Nickname*:</label>
            <input type='text' id='name' name='name' minLength='4' maxLength='60' placeholder='Example: jackson11!' required></input>
            <label htmlFor='email'>Email*:</label>
            <input type='email' id='email' name='email' style={{width: 200}} placeholder='Example: jackson11@email.com' required></input>
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
            <input type='radio' id='RecommendYes' value={true} name='recommend' defaultChecked></input>
            <label htmlFor='RecommendYes'>Yes</label>
            <input type='radio' id='RecommendNo' value={false} name='recommend'></input>
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
            <label htmlFor='summary'>Summary*:</label>
            <input type='input' id='summary' name='summary' maxLength='60' placeholder='Example: Best purchase ever!' style={{width: 300}} required></input>
          </div>
          <div id='ReviewBodyContainer' className='WriteContainer'>
            <label htmlFor='body' style={{alignSelf: 'start', justifySelf: 'end'}}>Review*:</label>
            <textarea
              id='body'
              name='body'
              minLength='50'
              maxLength='1000'
              placeholder='Example: Best purchase ever!'
              style={{width: 400, height: 100, resize: 'none'}}
              required>
            </textarea>
            <span id='BodyCharCount' style={{fontSize: 10, gridColumn: 2}} required>Minimum required characters left: 50</span>
          </div>
          <div className='WriteContainer' style={{display: 'flex', alignItems: 'start', justifyContent: 'start'}}>
            <label htmlFor='ReviewFileUpload'>Images: </label>
            <div id='ReviewImageHolder'>
              <div style={{borderBottom: '1px solid black', backgroundColor: '#c7c7c7', gridRow: 1}}>
                {
                  this.state.images.length < 5 &&
                  <input type='file' id='ReviewFileUpload' style={{width: 95}} multiple></input>
                }
                <span style={{fontSize: 12}}>Max: 5</span>
              </div>
              <div style={{gridRow: 2, display: 'flex', justifyContent: 'space-evenly'}}>
                {
                  this.state.images.map((img, i) => {
                    return <img src={img} style={{width: 100, height: 100}} key={i}></img>
                  })
                }
              </div>
            </div>
          </div>
          <div id='ReviewButtons'>
            <button type='button' style={{marginRight: 5}} onClick={this.props.closeModal}>Cancel</button>
            <button type='button' onClick={this.formSubmit.bind(this)}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
};

ReviewModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  product_id: PropTypes.number.isRequired,
  characteristics: PropTypes.object.isRequired
}

export default ReviewModal;