import React from 'react'

export const Header = () => {
  return (
    <nav>
      <div class='nav-wrapper ml-3'>
        <a href='#!' class='brand-logo'>
          <i 
            class='
              material-icons'>
                account_balance
          </i>Logo
        </a>
        <ul class='right hide-on-med-and-down'>
          <li>
            <a href='sass.html'>
              <i class='material-icons'>search</i>
            </a>
          </li>
          <li>
            <a href='badges.html'>
              <i class='material-icons'>view_module</i>
            </a>
          </li>
          <li>
            <a href='collapsible.html'>
              <i class='material-icons'>refresh</i>
            </a>
          </li>
          <li>
            <a href='mobile.html'>
              <i class='material-icons'>more_vert</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
