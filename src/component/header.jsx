/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import me from "../img/me.jpg";

export default function Header() {
  const headerBG = css`
    width: 1440px;
    height: 747px;
    background-color: rgba(158, 140, 108, 0.1);
    clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
  `;
  const jobTitle = css`
    color: #9e8c6c;
    font-family: PT Sans Narrow;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: 2px;
    text-transform: uppercase;
  `;
  const fullname = css`
    color: var(--font-color, #000);
    font-family: Playfair Display;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 112px; /* 88.889% */
    letter-spacing: -2.172px;
  `;
  const btn = css`
    width: 225px;
    height: 60px;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-family: PT Sans Narrow;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: 2px;
    text-transform: uppercase;
  `;
  const imgDiv = css`
    position: relative;
  `;
  const textCircle = css`
    position: absolute;
    left: 238px;
    top: 241px;
  `;

  return (
    <div css={headerBG} className="flex justify-around items-center">
      <div css={imgDiv}>
        <img src={me} className="w-[350px] h-[350px] rounded-full" />
        <svg
          css={textCircle}
          xmlns="http://www.w3.org/2000/svg"
          width="152"
          height="152"
          viewBox="0 0 152 152"
          fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M76.3883 0L74.3759 0.0327858L74.5572 11.2263L76.5696 11.1936L76.3883 0ZM66.7987 6.30687L65.8428 4.43728L65.7637 4.44688L66.2397 6.33966L66.8761 11.8365L64.9883 12.0556L63.6914 0.85563L65.2303 0.676508L69.0666 5.89825L69.9714 7.74146L70.0664 7.73026L69.5936 5.86946L68.9524 0.325459L70.8402 0.106354L72.1371 11.3063L70.5974 11.4846L66.7987 6.30687ZM84.1682 11.7317C84.6386 11.667 85.0219 11.5294 85.3189 11.3199L85.0706 9.59585C84.8462 9.715 84.597 9.81336 84.3231 9.89093C84.0492 9.96849 83.7266 9.99008 83.3553 9.9573C82.9312 9.91971 82.5759 9.79177 82.2908 9.57346C82.0057 9.35516 81.7805 9.06248 81.6152 8.69464C81.4499 8.3268 81.3437 7.89739 81.2966 7.4056C81.2494 6.91461 81.2518 6.37724 81.3037 5.7927C81.4243 4.43328 81.7086 3.45291 82.1582 2.84997C82.607 2.24783 83.1972 1.97914 83.9286 2.04472C84.3 2.0775 84.6186 2.13508 84.8837 2.21744C85.1488 2.30061 85.3772 2.40376 85.5697 2.52771L86.1239 0.794857C85.8891 0.666912 85.5825 0.542965 85.2031 0.423817C84.823 0.304668 84.3734 0.221504 83.8544 0.175124C83.3449 0.130344 82.833 0.175124 82.3187 0.311865C81.8045 0.447806 81.3341 0.719689 80.9077 1.12511C80.4812 1.53214 80.1163 2.09589 79.812 2.81798C79.507 3.54007 79.3049 4.46447 79.2051 5.59038C79.1093 6.67312 79.1332 7.59672 79.2802 8.35799C79.4263 9.12086 79.6643 9.74699 79.9949 10.2364C80.3263 10.7258 80.7288 11.0912 81.2055 11.3319C81.6807 11.5718 82.2053 11.7173 82.7779 11.7685C83.2339 11.8085 83.6971 11.7965 84.1682 11.7317ZM89.2868 1.11104L94.7546 2.27614L94.3689 4.09055L90.8695 3.34447L90.2978 6.03531L93.4689 6.71102L93.0832 8.52544L89.9121 7.84973L89.3139 10.6661L92.8755 11.4242L92.4898 13.2394L86.9598 12.0607L89.2868 1.11104ZM105.211 7.82166L107.647 8.82683L108.353 7.11157L101.605 4.32637L100.899 6.04163L103.35 7.05319L99.7957 15.6887L101.656 16.4571L105.211 7.82166ZM109.471 14.0156C109.189 14.5058 108.956 14.9768 108.77 15.4294C108.584 15.882 108.468 16.2978 108.422 16.6769C108.375 17.0567 108.402 17.391 108.499 17.6812C108.596 17.9707 108.793 18.201 109.088 18.3713C109.623 18.6792 110.182 18.6376 110.763 18.2466C111.344 17.8556 111.979 17.0591 112.669 15.8572C112.94 15.3862 113.168 14.924 113.354 14.4714C113.54 14.0188 113.66 13.6022 113.713 13.2208C113.766 12.8393 113.743 12.5003 113.644 12.2028C113.544 11.9061 113.342 11.6694 113.037 11.4943C111.976 10.8834 110.787 11.7238 109.471 14.0156ZM107.643 12.9633C108.588 11.3184 109.588 10.2277 110.646 9.69269C111.702 9.15692 112.807 9.2217 113.961 9.88621C114.561 10.2317 115.011 10.6467 115.309 11.1329C115.607 11.6175 115.769 12.1604 115.794 12.7586C115.819 13.3567 115.719 14.0068 115.494 14.7073C115.27 15.4086 114.937 16.1427 114.497 16.9096C113.552 18.5553 112.545 19.6412 111.474 20.169C110.403 20.6959 109.301 20.6328 108.165 19.9794C107.556 19.6284 107.105 19.2118 106.81 18.7288C106.517 18.2458 106.357 17.7052 106.333 17.1071C106.308 16.5089 106.41 15.8596 106.639 15.1615C106.868 14.4634 107.203 13.7309 107.643 12.9633ZM127.236 24.3257L125.623 25.7531L121.723 30.0049L123.205 31.3683L130.767 23.123L129.367 21.8356L124.505 23.8987L123.273 24.6984L123.225 24.6552L123.883 23.3709L125.439 18.2228L124.016 16.9129L116.453 25.1582L117.853 26.4456L121.763 22.1819L122.999 20.3866L123.07 20.4514L122.197 22.2762L120.952 26.4952L121.446 26.9494L125.445 25.2853L127.177 24.2722L127.236 24.3257ZM133.233 25.9406L136.762 30.2819L135.325 31.4534L133.067 28.6746L130.936 30.4114L132.983 32.9295L131.546 34.1002L129.499 31.5829L127.27 33.3997L129.568 36.2281L128.132 37.3988L124.563 33.0079L133.233 25.9406ZM141.716 37.7458L138.72 33.0199L129.281 39.0189L132.311 43.7992L133.875 42.8053L131.924 39.7266L134.351 38.1841L136.089 40.9245L137.653 39.9305L135.915 37.1893L138.235 35.7155L140.151 38.7398L141.716 37.7458ZM144.563 47.5777L143.434 45.1931L135.006 49.193L134.144 47.3714L142.573 43.3723L141.438 40.9725L143.112 40.1785L146.237 46.7828L144.563 47.5777ZM148.373 52.5181L142.353 57.2329L138.341 58.302L138.858 60.2492L142.886 59.176L150.438 60.2924L149.884 58.2061L145.434 57.819L144.185 57.9694L144.165 57.8926L145.297 57.4256L148.989 54.8363L148.373 52.5181ZM145.533 64.9998C144.973 65.0726 144.457 65.1718 143.986 65.2981C143.513 65.4237 143.113 65.5828 142.784 65.7771C142.454 65.9698 142.204 66.1937 142.033 66.4472C141.861 66.6999 141.798 66.9966 141.842 67.334C141.922 67.9482 142.293 68.3672 142.955 68.5927C143.618 68.8182 144.636 68.8422 146.008 68.663C146.547 68.5935 147.052 68.4951 147.525 68.3688C147.997 68.2432 148.4 68.0857 148.735 67.8978C149.071 67.7083 149.326 67.4844 149.502 67.2253C149.678 66.9654 149.743 66.6615 149.698 66.3129C149.54 65.0966 148.152 64.6592 145.533 64.9998ZM145.262 62.9063C147.141 62.6616 148.613 62.7984 149.679 63.3158C150.745 63.8323 151.363 64.7511 151.535 66.0738C151.624 66.7607 151.566 67.37 151.361 67.9026C151.157 68.4343 150.824 68.8918 150.364 69.274C149.904 69.6562 149.326 69.9705 148.634 70.2168C147.941 70.4631 147.157 70.643 146.281 70.7565C144.401 71.0012 142.927 70.8565 141.859 70.3239C140.792 69.7906 140.174 68.8742 140.005 67.5739C139.914 66.8758 139.972 66.2633 140.177 65.7363C140.382 65.2101 140.715 64.7551 141.175 64.3729C141.636 63.9907 142.213 63.6788 142.907 63.4381C143.601 63.1974 144.386 63.0199 145.262 62.9063ZM151.888 80.3656L151.919 78.4632L144.749 78.3465C143.919 78.3329 143.322 78.2121 142.958 77.9818C142.594 77.7515 142.417 77.3757 142.425 76.8535C142.434 76.3098 142.614 75.9235 142.963 75.6948C143.313 75.4653 143.924 75.3582 144.798 75.3726L151.968 75.4885L152 73.4742L144.479 73.3518C143.18 73.331 142.209 73.5997 141.567 74.1603C140.923 74.72 140.592 75.6133 140.573 76.8391C140.556 77.8843 140.867 78.7079 141.507 79.3101C142.146 79.9122 143.19 80.2249 144.639 80.248L151.888 80.3656ZM140.895 103.007L142.989 103.119L143.021 103.045L141.147 102.507L136.082 100.294L136.842 98.5504L147.163 103.057L146.544 104.479L140.107 105.176L138.061 105.032L138.023 105.12L139.867 105.647L144.976 107.878L144.217 109.622L133.895 105.115L134.515 103.693L140.895 103.007ZM141.478 114.526L142.477 112.777L132.773 107.218L131.774 108.967L141.478 114.526ZM127.239 116.498C127.209 116.136 127.284 115.735 127.466 115.295C127.647 114.855 127.871 114.448 128.136 114.076C128.469 113.606 128.859 113.226 129.306 112.936C129.753 112.647 130.272 112.482 130.861 112.444C131.45 112.404 132.111 112.515 132.841 112.773C133.572 113.031 134.38 113.476 135.265 114.106C136.186 114.76 136.88 115.402 137.348 116.029C137.817 116.657 138.12 117.258 138.254 117.832C138.389 118.405 138.386 118.948 138.244 119.462C138.102 119.976 137.882 120.442 137.586 120.858C137.284 121.284 136.986 121.631 136.69 121.899C136.397 122.167 136.135 122.37 135.906 122.508L134.692 121.153C134.896 121.05 135.1 120.905 135.306 120.717C135.51 120.529 135.722 120.283 135.937 119.98C136.362 119.38 136.429 118.734 136.137 118.042C135.844 117.349 135.142 116.608 134.031 115.817C133.554 115.478 133.091 115.205 132.644 114.997C132.197 114.79 131.773 114.665 131.372 114.622C130.972 114.58 130.605 114.626 130.273 114.763C129.942 114.899 129.652 115.141 129.405 115.489C129.189 115.793 129.046 116.082 128.974 116.359C128.903 116.635 128.861 116.9 128.851 117.154L127.239 116.498ZM130.286 129.212L134.048 125.071L125.778 117.538L121.972 121.726L123.344 122.974L125.794 120.277L127.92 122.214L125.738 124.616L127.11 125.864L129.29 123.462L131.323 125.313L128.916 127.963L130.286 129.212ZM118.141 137.081L120.234 135.477L114.564 128.061L116.162 126.835L121.831 134.252L123.937 132.638L125.062 134.111L119.267 138.554L118.141 137.081ZM111.891 134.729C112.188 135.118 112.478 135.557 112.76 136.046C114.08 138.336 114.209 139.788 113.148 140.401C112.844 140.577 112.538 140.633 112.232 140.57C111.926 140.507 111.621 140.357 111.317 140.12C111.015 139.882 110.714 139.569 110.417 139.181C110.119 138.793 109.835 138.363 109.564 137.893C108.872 136.693 108.503 135.742 108.457 135.043C108.41 134.343 108.654 133.839 109.189 133.53C109.485 133.36 109.782 133.304 110.081 133.365C110.381 133.427 110.682 133.572 110.987 133.802C111.292 134.031 111.593 134.341 111.891 134.729ZM115.905 139.232C115.973 138.049 115.533 136.634 114.586 134.991C114.143 134.225 113.679 133.567 113.191 133.018C112.702 132.469 112.193 132.055 111.664 131.776C111.134 131.498 110.587 131.365 110.023 131.377C109.458 131.389 108.872 131.571 108.264 131.923C107.129 132.578 106.521 133.502 106.439 134.694C106.358 135.886 106.791 137.304 107.738 138.948C108.18 139.715 108.648 140.37 109.14 140.916C109.633 141.463 110.144 141.875 110.674 142.154C111.203 142.433 111.753 142.564 112.321 142.55C112.891 142.534 113.475 142.354 114.074 142.007C115.227 141.341 115.837 140.417 115.905 139.232ZM94.5259 144.132L94.9459 146.246L95.0226 146.221L95.0194 144.214L95.5943 139.915L96.2348 139.716L99.2494 142.916L100.387 144.589L100.478 144.56L99.5496 142.588L97.8367 137.058L99.6519 136.495L102.964 147.187L101.118 147.761L97.4574 143.824L96.6796 142.609L96.6181 142.628L96.6884 144.096L96.0232 149.343L94.208 149.907L90.8956 139.215L92.8177 138.618L94.5259 144.132ZM84.991 151.483L90.5147 150.622L88.7953 139.561L83.2086 140.431L83.4937 142.264L87.092 141.704L87.5344 144.548L84.3306 145.047L84.6148 146.88L87.8187 146.381L88.2411 149.1L84.7067 149.65L84.991 151.483ZM81.6637 151.791L76.0778 152L76.0083 150.146L79.5843 150.012L79.4821 147.264L76.2415 147.384L76.1728 145.531L79.4126 145.41L79.3056 142.533L75.6673 142.669L75.5978 140.814L81.2477 140.604L81.6637 151.791ZM66.1498 149.518L68.7763 149.74L69.5605 140.434L71.5657 140.603L70.7807 149.91L73.4224 150.134L73.2674 151.982L65.9941 151.368L66.1498 149.518ZM59.9898 150.341L58.9389 142.761L60.0298 138.748L58.0885 138.219L56.9928 142.247L52.2382 148.227L54.3192 148.794L56.8866 145.135L57.3833 143.977L57.46 143.999L57.2955 145.213L57.678 149.71L59.9898 150.341ZM50.6296 141.614C50.8476 141.093 51.0209 140.596 51.1495 140.124C51.278 139.652 51.3419 139.225 51.3395 138.842C51.3379 138.461 51.2708 138.132 51.1383 137.856C51.0049 137.58 50.7813 137.377 50.4675 137.245C49.8981 137.005 49.3495 137.116 48.8216 137.577C48.2938 138.037 47.7627 138.907 47.2269 140.185C47.0169 140.687 46.8484 141.173 46.7198 141.646C46.5912 142.117 46.5242 142.546 46.5186 142.931C46.513 143.316 46.5785 143.65 46.7142 143.932C46.85 144.215 47.08 144.424 47.4034 144.56C48.5334 145.035 49.6082 144.053 50.6296 141.614ZM52.5741 142.43C51.841 144.18 50.9834 145.387 50.0011 146.05C49.0197 146.713 47.9153 146.787 46.6871 146.271C46.049 146.003 45.5523 145.647 45.1954 145.202C44.8392 144.758 44.6108 144.24 44.5118 143.65C44.4128 143.059 44.4311 142.401 44.5669 141.678C44.7026 140.955 44.9406 140.185 45.2832 139.368C46.0163 137.619 46.8811 136.415 47.8769 135.759C48.8736 135.101 49.9764 135.027 51.1838 135.534C51.8314 135.806 52.3313 136.164 52.6835 136.605C53.0349 137.048 53.2601 137.565 53.3591 138.156C53.4581 138.746 53.4374 139.403 53.2968 140.124C53.1571 140.845 52.9151 141.614 52.5741 142.43ZM34.1794 139.406L35.8101 140.384L39.4971 134.226C39.9235 133.512 40.3276 133.056 40.7077 132.855C41.0886 132.654 41.5031 132.689 41.9503 132.957C42.4159 133.237 42.661 133.585 42.6834 134.003C42.7065 134.421 42.4941 135.004 42.0445 135.754L38.3583 141.914L40.084 142.95L43.9515 136.489C44.6191 135.373 44.8722 134.397 44.7093 133.559C44.5456 132.722 43.9395 131.988 42.8894 131.358C41.9942 130.821 41.1262 130.678 40.2853 130.933C39.4444 131.186 38.6522 131.935 37.9072 133.178L34.1794 139.406ZM20.1796 118.478L19.0321 120.236L19.0792 120.3L20.4847 118.949L24.9375 115.671L26.0634 117.204L16.9909 123.882L16.0734 122.632L18.7015 116.708L19.8522 115.008L19.7955 114.93L18.4156 116.263L13.9244 119.569L12.7984 118.036L21.871 111.358L22.7885 112.608L20.1796 118.478ZM9.93279 113.202L10.943 114.945L20.6112 109.325L19.601 107.581L9.93279 113.202ZM15.3675 99.8704C15.6957 100.026 16.004 100.292 16.2923 100.67C16.5813 101.047 16.8209 101.446 17.0102 101.862C17.2481 102.386 17.3807 102.915 17.4071 103.448C17.4326 103.981 17.3144 104.512 17.0517 105.042C16.7898 105.571 16.3641 106.088 15.774 106.591C15.1838 107.095 14.3941 107.571 13.4054 108.022C12.3793 108.491 11.4761 108.77 10.6991 108.862C9.92129 108.952 9.2513 108.912 8.68751 108.741C8.12452 108.571 7.65736 108.295 7.28443 107.914C6.91309 107.533 6.62082 107.11 6.4084 106.643C6.19278 106.168 6.04265 105.735 5.9588 105.346C5.87575 104.957 5.83183 104.628 5.82704 104.361L7.60625 103.989C7.59347 104.218 7.61583 104.468 7.67492 104.739C7.73402 105.011 7.84103 105.318 7.99595 105.657C8.3002 106.326 8.82486 106.707 9.56913 106.802C10.3142 106.896 11.3068 106.66 12.547 106.095C13.0796 105.851 13.5484 105.589 13.9517 105.304C14.3549 105.021 14.676 104.717 14.9139 104.392C15.1519 104.066 15.2956 103.726 15.3444 103.369C15.3923 103.013 15.3292 102.641 15.1519 102.253C14.9978 101.913 14.8197 101.643 14.6169 101.442C14.4148 101.242 14.2064 101.073 13.9924 100.936L15.3675 99.8704ZM2.85789 96.0983L4.53887 101.437L15.2013 98.0711L13.5012 92.671L11.734 93.2292L12.8288 96.7069L10.0873 97.5721L9.11306 94.4758L7.34583 95.034L8.32009 98.1302L5.70079 98.9571L4.62432 95.5402L2.85789 96.0983ZM2.19779 81.636L2.52521 84.2541L11.7798 83.0946L12.0297 85.0945L2.77516 86.254L3.10417 88.8881L1.26587 89.1184L0.359492 81.8663L2.19779 81.636ZM7.35869 77.3772C6.87316 77.4332 6.3485 77.4564 5.78392 77.4476C3.14386 77.4044 1.83341 76.7703 1.85337 75.5444C1.85896 75.1926 1.96757 74.9007 2.17919 74.6696C2.39001 74.4385 2.6751 74.2538 3.03445 74.1154C3.39381 73.9779 3.81545 73.8811 4.30098 73.8243C4.78651 73.7684 5.30079 73.7452 5.84381 73.7532C7.22773 73.7764 8.23153 73.9475 8.85441 74.2666C9.47729 74.5856 9.78394 75.055 9.77436 75.6731C9.76877 76.0146 9.66256 76.2977 9.45653 76.5232C9.2505 76.7495 8.971 76.9342 8.61723 77.0781C8.26347 77.2213 7.84422 77.3212 7.35869 77.3772ZM1.43812 78.5127C2.41716 79.1796 3.85458 79.5275 5.74958 79.5587C6.63359 79.5731 7.43535 79.5115 8.15646 79.3731C8.87757 79.2356 9.49406 79.0117 10.0043 78.6998C10.5154 78.388 10.9107 77.9865 11.1902 77.4956C11.4697 77.0038 11.6151 76.4064 11.6262 75.7027C11.6478 74.3921 11.1687 73.3949 10.1896 72.7128C9.21057 72.0307 7.77315 71.6733 5.87815 71.6429C4.99413 71.6285 4.19158 71.6933 3.47127 71.8356C2.74936 71.9787 2.13367 72.2058 1.62259 72.5169C1.1123 72.8288 0.716212 73.2334 0.436714 73.73C0.157215 74.2266 0.0118763 74.8215 0.000696358 75.514C-0.0208649 76.847 0.458275 77.8466 1.43812 78.5127ZM5.962 56.9252L7.99755 57.6233L13.6171 58.9156L14.0675 56.9516L3.17101 54.4455L2.74537 56.3007L6.94184 59.5137L8.2451 60.1902L8.23073 60.2534L6.79011 60.3158L1.55231 61.5073L1.11949 63.3928L12.0159 65.899L12.4408 64.0438L6.80608 62.7483L4.63718 62.5612L4.65794 62.4676L6.67432 62.3237L10.9514 61.3217L11.1016 60.6668L7.67972 58.0096L5.94443 57.0036L5.962 56.9252ZM4.40631 50.8985L6.43866 45.6839L8.16516 46.3581L6.8635 49.6958L9.42291 50.6962L10.6016 47.6711L12.3273 48.346L11.1486 51.3703L13.827 52.417L15.151 49.0201L16.8767 49.695L14.8212 54.9687L4.40631 50.8985ZM10.4811 37.7025L7.84821 42.6404L17.7105 47.9133L20.3737 42.9195L18.7391 42.0454L17.0237 45.2624L14.4875 43.9062L16.0152 41.0419L14.3805 40.1686L12.8536 43.0322L10.43 41.7368L12.115 38.5765L10.4811 37.7025ZM17.6263 30.3781L16.1099 32.5363L23.737 37.9116L22.5791 39.5597L14.9511 34.1836L13.4251 36.3547L11.9102 35.2872L16.1115 29.3105L17.6263 30.3781ZM20.0224 24.6421L27.0914 27.5504L30.0037 30.5147L31.438 29.1009L28.5152 26.1254L25.7498 19.0013L24.2125 20.5151L26.0764 24.5789L26.8254 25.5913L26.7679 25.648L25.8033 24.8932L21.7306 22.9604L20.0224 24.6421ZM32.2704 20.929C32.6114 21.38 32.9524 21.7791 33.2957 22.1277C33.6391 22.4764 33.9761 22.7459 34.3067 22.9362C34.6373 23.1273 34.9552 23.2344 35.2602 23.2576C35.5645 23.2808 35.8528 23.1897 36.1243 22.9841C36.617 22.6115 36.7967 22.0805 36.6641 21.392C36.5315 20.7035 36.0484 19.8071 35.2139 18.7012C34.8857 18.267 34.5503 17.8768 34.2077 17.5281C33.8643 17.1795 33.5281 16.9068 33.1983 16.7085C32.8685 16.5101 32.5475 16.399 32.2352 16.3742C31.923 16.3502 31.6267 16.4438 31.3472 16.6565C30.3706 17.3962 30.678 18.8203 32.2704 20.929ZM30.5894 22.2021C29.4459 20.6883 28.835 19.3401 28.7559 18.1566C28.6768 16.9739 29.168 15.9808 30.2292 15.1763C30.7819 14.7581 31.3385 14.507 31.9022 14.4214C32.4652 14.3359 33.0266 14.3991 33.5864 14.6102C34.1462 14.8213 34.7044 15.1667 35.261 15.6481C35.8168 16.1287 36.3622 16.7221 36.8957 17.4281C38.0384 18.9419 38.6422 20.2957 38.7092 21.488C38.7755 22.6811 38.2868 23.6726 37.2423 24.4635C36.6809 24.8881 36.1219 25.1416 35.5629 25.2232C35.0039 25.3055 34.4449 25.2416 33.8851 25.0297C33.3253 24.8194 32.7695 24.4715 32.2169 23.9877C31.6643 23.5031 31.122 22.9082 30.5894 22.2021ZM42.4263 7.79551L40.7629 8.71671L44.2335 15.0004C44.636 15.7281 44.8276 16.307 44.81 16.7372C44.7917 17.1675 44.5545 17.5097 44.0985 17.7624C43.6234 18.0255 43.1993 18.0623 42.8264 17.8728C42.4543 17.6824 42.0574 17.2058 41.6341 16.4406L38.1636 10.1561L36.4027 11.1317L40.0434 17.7232C40.6719 18.8619 41.389 19.5704 42.1939 19.8495C42.9989 20.1286 43.9372 19.9711 45.0089 19.3777C45.9216 18.8723 46.4798 18.1918 46.6827 17.3362C46.8855 16.4806 46.6364 15.4186 45.936 14.1496L42.4263 7.79551Z"
            fill="#9E8C6C"
          />
        </svg>
      </div>

      <div className="w-[635px] flex flex-col justify-center">
        <h1 css={jobTitle}>FULLSTACK SOFTWARE DEVELOPER / DATA ANALYST</h1>
        <h1 className="mt-2.5" css={fullname}>
          Nathkit Tangthumrongsakkul
        </h1>
        <button css={btn} className="w-[225px] h-[60px] bg-[#0699A6] mt-10">
          CONTACT ME
        </button>
      </div>
    </div>
  );
}
