function Header() {
    return (
      <div id="header">
        <a href="https://www.yemeksepeti.com/login/new" className="room">
          <div id="sign">
              <span className="material-symbols-outlined" id="person">person</span>
              <b>GİRİŞ YAP</b>
          </div>
        </a>
        <div id="belt">
            <a href="https://www.yemeksepeti.com/"><svg width="120" height="31" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M58.073 15.715s1.974 4.434 2.27 5.088c.25.55.012.914-.693 1.169-.672.241-1.691.374-2.399.241a.934.934 0 01-.773-.643l-1.37-3.697-.819.715s-.38 1.985-.483 2.489c-.2 1.001-.56 1.124-1.32 1.186-.69.05-1.38-.078-2.007-.37-.483-.233-.748-.494-.543-1.312l2.811-14.444c.171-.874.312-1.252 1.57-1.215.71.022 1.491.224 1.933.534.442.31.45.804.385 1.15-.362 1.87-1.478 7.586-1.478 7.586s2.8-2.764 3.333-3.26c.512-.484.885-.77 1.25-.782.682 0 1.347.214 1.9.614.648.5.736 1.152.248 1.605l-3.815 3.346zm22.946 5.193c.025.346-.034.623-.622.819a11.126 11.126 0 01-4.024.589c-3.36-.106-5.004-2.01-4.906-5.083.121-3.576 2.636-7.265 6.932-7.125 2.426.077 4.034 1.595 3.986 3.803-.1 3.072-2.802 4.21-7.213 3.925.036.31.169.6.38.828.397.374 1.037.644 1.926.663a7.048 7.048 0 002.012-.273c.547-.146.725-.033 1.058.403.204.267.427.87.47 1.45zm-5.396-5.919c2.182.12 3.133-.284 3.158-1.1v-.024c.015-.483-.31-.845-.932-.87-1.297-.042-2.053 1.039-2.227 1.994zm-26.75 5.918c.026.346-.033.623-.621.818a11.131 11.131 0 01-4.024.59c-3.36-.106-5.005-2.011-4.906-5.083.115-3.576 2.636-7.265 6.932-7.125 2.424.077 4.032 1.595 3.985 3.803-.098 3.072-2.802 4.21-7.212 3.924.035.31.168.601.382.829.396.374 1.036.644 1.924.663a7.039 7.039 0 002.007-.283c.548-.146.725-.032 1.059.404.204.266.428.87.47 1.449l.004.01zm-5.398-5.926c2.183.12 3.132-.284 3.16-1.1v-.025c.015-.483-.31-.845-.934-.87-1.296-.041-2.053 1.04-2.227 1.995h.001zm-23.771 5.917c.025.347-.034.623-.622.819a11.133 11.133 0 01-4.024.59c-3.36-.107-5.005-2.011-4.905-5.084.12-3.576 2.635-7.265 6.93-7.125 2.425.077 4.034 1.595 3.985 3.803-.099 3.072-2.801 4.211-7.213 3.925.036.31.17.6.382.828.396.375 1.037.644 1.925.663a7.05 7.05 0 002.012-.273c.548-.146.724-.032 1.059.404.203.267.426.87.47 1.449v.001zm-5.397-5.918c2.182.12 3.132-.284 3.159-1.1v-.025c.016-.483-.31-.845-.932-.87-1.297-.042-2.053 1.04-2.227 1.995zm90.272 5.917c.025.347-.034.623-.622.819a11.135 11.135 0 01-4.024.59c-3.36-.107-5.004-2.012-4.905-5.084.12-3.576 2.636-7.265 6.931-7.125 2.424.077 4.033 1.595 3.986 3.803-.1 3.072-2.802 4.21-7.212 3.925.034.31.168.6.381.828.396.375 1.036.644 1.924.663a7.038 7.038 0 002.012-.273c.548-.146.725-.032 1.06.404.202.266.427.87.469 1.449v.001zm-5.396-5.919c2.183.121 3.132-.283 3.159-1.1v-.024c.015-.483-.31-.845-.934-.87-1.296-.042-2.052 1.039-2.227 1.994h.002zm-63.17-4.926c-1.416 0-2.787.666-3.744 1.984-.12-.911-.907-1.982-2.565-1.984-1.463 0-2.758.623-3.743 1.99l.112-.536c.105-.495-.1-.904-.454-1.08a3.721 3.721 0 00-1.678-.371c-.603 0-1.099.046-1.266.91l-1.864 9.54c-.12.614-.042.846.242 1.088.41.353 1.168.585 1.776.658.725.086 1.493-.046 1.605-.625l.95-4.883c.444-2.278 1.364-3.53 2.229-3.528.527 0 .742.432.742 1.057-.013.476-.07.95-.17 1.415l-.966 4.896c-.09.46-.063.781.315 1.06.412.303 1.13.56 1.788.616 1.004.086 1.44-.164 1.618-1.076l.863-4.433c.446-2.295 1.259-3.529 2.123-3.529.552 0 .817.41.816.986-.013.5-.07.998-.17 1.487l-.948 4.842c-.1.473-.062.81.287 1.087.425.34 1.224.58 1.823.635.884.08 1.422-.139 1.612-1.12l1.14-5.85c.128-.713.209-1.435.242-2.16 0-1.825-.836-3.07-2.709-3.072l-.006-.004zm82.095-4.533a1.982 1.982 0 00-1.905 2.15c.07 1.045.798 1.723 1.797 1.682h.022c1.113-.046 2.06-.836 1.972-2.154-.074-1.022-.8-1.722-1.886-1.678zM13.303 7.298c.313-.468.285-.917.028-1.367a4.076 4.076 0 00-1.617-1.632c-.908-.483-1.598-.436-2.15.55-.655 1.182-1.362 2.335-2.053 3.503-.628 1.059-1.247 2.115-1.933 3.282-.128-.338-.826-3.55-1.197-5.097a2.332 2.332 0 00-.554-1.064 3.52 3.52 0 00-2.49-1.094C.22 4.37-.085 4.725.019 5.684c.038.347.083.693.152 1.036.408 2.04 1.031 4.031 1.859 5.94.349.774.769 1.514 1.256 2.21.19.277.204.43.072.706-.634 1.329-1.282 2.657-1.848 4.01-.516 1.24-.836 2.537-.766 3.904a1.7 1.7 0 00.71 1.316 2.681 2.681 0 002.203.52c.707-.136 1.313-.447 1.5-1.265a37.834 37.834 0 014.952-11.927c1.076-1.701 2.115-3.228 3.19-4.83l.004-.006zm105.63 3.239a4.134 4.134 0 00-1.882-.399c-1.014.008-1.223.267-1.386.966-.008.03-1.397 9.782-1.397 9.782-.099.69.203.873.62 1.069.66.284 1.381.391 2.095.313.724-.094 1.074-.215 1.23-1.288l1.315-9.266c.062-.483-.102-.932-.595-1.176v-.001zm-6.006 8.834c-.16-.37-.387-.567-.83-.509-.24.032-.75.175-.965 0a.802.802 0 01-.298-.615c-.008-.223.134-.898.206-1.254l.735-3.792h1.71c.213 0 .651-.242.753-.732.1-.432.174-.87.223-1.31.047-.468-.427-.834-.898-.835h-1.227s.387-1.915.387-1.97c.086-.634-.15-.845-.543-1.013a4.845 4.845 0 00-1.94-.378c-.8.025-1.118.195-1.338 1.243l-.407 2.108h-.773a.771.771 0 00-.758.615c-.063.32-.16.786-.252 1.28-.057.303-.168.934.75.98h.482l-.86 4.375a8.731 8.731 0 00-.23 2.015c.08 1.615 1.088 2.692 3.233 2.692a4.39 4.39 0 002.053-.476c.835-.42.934-.617.98-1.254.02-.4-.043-.799-.188-1.172l-.005.002zm-42.22-6.168c.391-.315.682-.737.835-1.216.193-.634.2-.946-.75-1.429-.596-.294-1.85-.573-3.243-.532-3.146.093-5.209 1.858-5.066 4.347.081 1.39 1.355 2.389 2.694 3.069 1.015.499 1.37.825 1.396 1.28.025.455-.313.825-1.105.845-.878.046-1.802-.196-2.48-.456-.555-.272-.795-.12-1.006.147a2.66 2.66 0 00-.589 1.412c-.055.62.075.907.76 1.2.76.33 1.933.552 3.14.537 3.267-.073 5.435-1.649 5.28-4.382-.087-1.485-1.527-2.48-2.917-3.206-.815-.384-1.242-.708-1.264-1.068-.031-.55.483-.854 1.296-.878.643 0 1.284.089 1.902.265l.167.047c.636.241.692.225.948.012l.002.006zm23.548 1.274c0 4.058-2.506 7.944-6.444 7.94-.419 0-.835-.052-1.24-.157a2.385 2.385 0 01-.633-.253h-.048s-.631 3.26-.641 3.292c-.226 1.073-.524 1.185-1.34 1.273a4.032 4.032 0 01-2.076-.371l-.037-.017c-.411-.202-.66-.42-.52-1.175 0-.02 2.707-13.948 2.723-13.992.12-.563.297-.845.782-.936.327-.038.657-.038.984 0a3.4 3.4 0 011.381.441.98.98 0 01.391 1.018l-.053.28a3.928 3.928 0 011.328-1.174 4.036 4.036 0 011.949-.515c2.473 0 3.502 2.021 3.502 4.347h-.008zm-4.074.405c0-.768-.241-1.536-1.078-1.538a1.411 1.411 0 00-.872.318c-.595.458-1.047 1.378-1.248 2.536l-.507 2.856a1.57 1.57 0 001.13.434c1.514 0 2.573-2.686 2.575-4.607" fill="#FA0050" fillRule="nonzero"/></svg></a>
        </div>
        <div className="room">
            <span className="material-symbols-outlined">shopping_bag</span>
        </div>
      </div>
    );
  }
  
  export default Header;
