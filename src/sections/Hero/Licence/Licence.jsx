import { useState } from 'react'
import { driver, licence } from '../../../config/site'
import './licence.css'

export default function Licence() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <div className="lic-wrap">
      <div className="lic">
        <div className="lic-sheen" />
        <header className="lic-stripe">
          <h4>MOTORSPORT<br />DRIVER LICENCE</h4>
          <span>BD</span>
        </header>
        <div className="lic-photo">
          {imgOk ? (
            <img src={driver.photo} alt={`${driver.first} ${driver.last}`} onError={() => setImgOk(false)} />
          ) : (
            <div className="lic-init">MH</div>
          )}
        </div>
        <div className="lic-info">
          {licence.fields.map(([label, value, full]) => (
            <div key={label} className={full ? 'is-full' : ''}>
              <small>{label}</small>
              <b>{value}</b>
            </div>
          ))}
        </div>
        <div className="lic-sign">{driver.first}</div>
        <footer className="lic-bottom">
          <div className="lic-barcode" />
          <span>{licence.footer}</span>
        </footer>
      </div>
    </div>
  )
}