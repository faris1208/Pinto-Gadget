import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

export const MessageIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="28"
    height="26"
    viewBox="0 0 28 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3734 22.6399C15.3121 22.5732 16.2383 22.4234 17.1521 22.1906C18.2765 22.5276 19.463 22.6042 20.6214 22.4146C20.6674 22.4086 20.7137 22.405 20.7601 22.4039C21.1734 22.4039 21.7161 22.6412 22.5067 23.1412V22.3199C22.5069 22.1768 22.5455 22.0364 22.6185 21.9132C22.6914 21.7901 22.796 21.6888 22.9214 21.6199C23.2654 21.4292 23.5854 21.2066 23.8774 20.9639C25.0294 19.9999 25.6801 18.7159 25.6801 17.3559C25.6796 16.9061 25.6081 16.4593 25.4681 16.0319C25.8147 15.3919 26.0974 14.7172 26.3041 14.0186C26.9707 15.0052 27.3307 16.1652 27.3334 17.3559C27.3334 19.2039 26.4614 20.9292 24.9534 22.1892C24.7011 22.3991 24.4362 22.5932 24.1601 22.7706V24.6932C24.1601 25.3546 23.3867 25.7332 22.8414 25.3412C22.3255 24.9602 21.7915 24.6042 21.2414 24.2746C21.0832 24.1816 20.9188 24.0996 20.7494 24.0292C20.2961 24.0968 19.8347 24.131 19.3654 24.1319C17.4827 24.1319 15.7427 23.5746 14.3734 22.6399ZM4.41875 18.7919C2.04008 16.8052 0.666748 14.0906 0.666748 11.1866C0.666748 5.24789 6.34408 0.501221 13.2761 0.501221C20.2081 0.501221 25.8867 5.24789 25.8867 11.1866C25.8867 17.1252 20.2081 21.8706 13.2761 21.8706C12.4965 21.8706 11.7285 21.8114 10.9721 21.6932C10.6454 21.7692 9.34008 22.5346 7.45875 23.8906C6.77875 24.3826 5.81075 23.9079 5.81075 23.0799V19.7999C5.32334 19.4984 4.85815 19.1625 4.41875 18.7946M11.0187 19.6719C11.0747 19.6719 11.1325 19.6763 11.1921 19.6852C11.8809 19.7994 12.5779 19.8565 13.2761 19.8559C19.1321 19.8559 23.8187 15.9372 23.8187 11.1866C23.8187 6.43589 19.1321 2.51855 13.2761 2.51855C7.42275 2.51855 2.73341 6.43722 2.73341 11.1866C2.73341 13.4839 3.82808 15.6466 5.76408 17.2652C6.25297 17.6723 6.78453 18.0372 7.35875 18.3599C7.68008 18.5399 7.87875 18.8732 7.87875 19.2332V21.1252C9.36675 20.1386 10.3454 19.6719 11.0174 19.6719"
      fill="white"
    />
  </svg>
);

export const LocationIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.03981 13.0719C5.94033 13.1449 5.84761 13.2111 5.76289 13.2705C5.67251 13.2106 5.57226 13.1416 5.46354 13.0639C4.95095 12.6971 4.28616 12.1587 3.63144 11.4873C2.28853 10.1099 1.15943 8.35178 1.15943 6.47637C1.15943 3.90315 3.24543 1.81715 5.81865 1.81715C8.39186 1.81715 10.4779 3.90315 10.4779 6.47637C10.4779 8.33167 9.29901 10.0848 7.90699 11.4767C7.23164 12.1521 6.55201 12.6963 6.03981 13.0719ZM11.6427 6.47637C11.6427 11.1356 5.81865 14.63 5.81865 14.63C5.52745 14.63 -0.00537109 11.1356 -0.00537109 6.47637C-0.00537109 3.25984 2.60213 0.652344 5.81865 0.652344C9.03514 0.652344 11.6427 3.25984 11.6427 6.47637ZM6.98345 6.47637C6.98345 7.11965 6.46193 7.64117 5.81865 7.64117C5.17537 7.64117 4.65385 7.11965 4.65385 6.47637C4.65385 5.83306 5.17537 5.31156 5.81865 5.31156C6.46193 5.31156 6.98345 5.83306 6.98345 6.47637Z"
      fill="#000"
    />
  </svg>
);

export const SearchIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8082 12.0787L15.5628 14.8333M3.16699 7.94676C3.16699 9.40791 3.74743 10.8092 4.78062 11.8424C5.8138 12.8756 7.21511 13.456 8.67625 13.456C10.1374 13.456 11.5387 12.8756 12.5719 11.8424C13.6051 10.8092 14.1855 9.40791 14.1855 7.94676C14.1855 6.48561 13.6051 5.08431 12.5719 4.05112C11.5387 3.01794 10.1374 2.4375 8.67625 2.4375C7.21511 2.4375 5.8138 3.01794 4.78062 4.05112C3.74743 5.08431 3.16699 6.48561 3.16699 7.94676Z"
      stroke="#F1F1F1"
      strokeWidth="1.09375"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BlackSearchIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8082 11.0787L13.5628 13.8333M1.16699 6.94676C1.16699 8.40791 1.74743 9.80921 2.78062 10.8424C3.8138 11.8756 5.21511 12.456 6.67625 12.456C8.1374 12.456 9.5387 11.8756 10.5719 10.8424C11.6051 9.80921 12.1855 8.40791 12.1855 6.94676C12.1855 5.48561 11.6051 4.08431 10.5719 3.05112C9.5387 2.01794 8.1374 1.4375 6.67625 1.4375C5.21511 1.4375 3.8138 2.01794 2.78062 3.05112C1.74743 4.08431 1.16699 5.48561 1.16699 6.94676Z"
      stroke="#353535"
      strokeWidth="1.09375"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CartIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="21"
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5.5V4.5C4 3.43913 4.42143 2.42172 5.17157 1.67157C5.92172 0.921427 6.93913 0.5 8 0.5C9.06087 0.5 10.0783 0.921427 10.8284 1.67157C11.5786 2.42172 12 3.43913 12 4.5V5.5H15C15.552 5.5 16 5.949 16 6.507V18.508C16 19.608 15.105 20.5 14.006 20.5H1.994C1.4655 20.5 0.958626 20.2902 0.584736 19.9167C0.210846 19.5432 0.000530086 19.0365 0 18.508V6.508C0 5.95 0.445 5.5 1 5.5H4ZM5.2 5.5H10.8V4.5C10.8 3.75739 10.505 3.0452 9.9799 2.5201C9.4548 1.995 8.74261 1.7 8 1.7C7.25739 1.7 6.5452 1.995 6.0201 2.5201C5.495 3.0452 5.2 3.75739 5.2 4.5V5.5ZM4 6.7H1.2V18.508C1.2 18.944 1.556 19.3 1.994 19.3H14.006C14.2162 19.3 14.4179 19.2166 14.5667 19.0681C14.7156 18.9197 14.7995 18.7182 14.8 18.508V6.7H12V9.5H10.8V6.7H5.2V9.5H4V6.7Z"
      fill="white"
    />
  </svg>
);

export const BlackCartIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="21"
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5.5V4.5C4 3.43913 4.42143 2.42172 5.17157 1.67157C5.92172 0.921427 6.93913 0.5 8 0.5C9.06087 0.5 10.0783 0.921427 10.8284 1.67157C11.5786 2.42172 12 3.43913 12 4.5V5.5H15C15.552 5.5 16 5.949 16 6.507V18.508C16 19.608 15.105 20.5 14.006 20.5H1.994C1.4655 20.5 0.958626 20.2902 0.584736 19.9167C0.210846 19.5432 0.000530086 19.0365 0 18.508V6.508C0 5.95 0.445 5.5 1 5.5H4ZM5.2 5.5H10.8V4.5C10.8 3.75739 10.505 3.0452 9.9799 2.5201C9.4548 1.995 8.74261 1.7 8 1.7C7.25739 1.7 6.5452 1.995 6.0201 2.5201C5.495 3.0452 5.2 3.75739 5.2 4.5V5.5ZM4 6.7H1.2V18.508C1.2 18.944 1.556 19.3 1.994 19.3H14.006C14.2162 19.3 14.4179 19.2166 14.5667 19.0681C14.7156 18.9197 14.7995 18.7182 14.8 18.508V6.7H12V9.5H10.8V6.7H5.2V9.5H4V6.7Z"
      fill="#1E1E1E"
    />
  </svg>
);

export const FilterIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="16"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.058 7.723C20.006 7.189 20.481 6.922 20.74 6.491C21 6.061 21 5.542 21 4.504V3.814C21 2.488 21 1.824 20.56 1.412C20.122 1 19.415 1 18 1H4C2.586 1 1.879 1 1.44 1.412C1.001 1.824 1 2.488 1 3.815V4.505C1 5.542 1 6.061 1.26 6.491C1.52 6.921 1.993 7.189 2.942 7.723L5.855 9.363C6.491 9.721 6.81 9.9 7.038 10.098C7.512 10.509 7.804 10.993 7.936 11.588C8 11.872 8 12.206 8 12.873V15.543C8 16.452 8 16.907 8.252 17.261C8.504 17.616 8.952 17.791 9.846 18.141C11.725 18.875 12.664 19.242 13.332 18.824C14 18.406 14 17.452 14 15.542V12.872C14 12.206 14 11.872 14.064 11.587C14.1896 11.0042 14.5059 10.4798 14.963 10.097"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const NavbarDownIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="12"
    height="15"
    viewBox="0 0 12 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.03981 13.0719C5.94033 13.1449 5.84761 13.2111 5.76289 13.2705C5.67251 13.2106 5.57226 13.1416 5.46354 13.0639C4.95095 12.6971 4.28616 12.1587 3.63144 11.4873C2.28853 10.1099 1.15943 8.35178 1.15943 6.47637C1.15943 3.90315 3.24543 1.81715 5.81865 1.81715C8.39186 1.81715 10.4779 3.90315 10.4779 6.47637C10.4779 8.33167 9.29901 10.0848 7.90699 11.4767C7.23164 12.1521 6.55201 12.6963 6.03981 13.0719ZM11.6427 6.47637C11.6427 11.1356 5.81865 14.63 5.81865 14.63C5.52745 14.63 -0.00537109 11.1356 -0.00537109 6.47637C-0.00537109 3.25984 2.60213 0.652344 5.81865 0.652344C9.03514 0.652344 11.6427 3.25984 11.6427 6.47637ZM6.98345 6.47637C6.98345 7.11965 6.46193 7.64117 5.81865 7.64117C5.17537 7.64117 4.65385 7.11965 4.65385 6.47637C4.65385 5.83306 5.17537 5.31156 5.81865 5.31156C6.46193 5.31156 6.98345 5.83306 6.98345 6.47637Z"
      fill="#000"
    />
  </svg>
);

export const Logo: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="109"
    height="39"
    viewBox="0 0 109 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.1268 27.2359L9.07395 27.4594C8.81876 27.4675 8.58616 27.6077 8.45995 27.8297L3.481 36.5852C3.14835 37.1701 2.26929 37.0353 2.12727 36.3775L0.065114 26.8265C0.0234737 26.6336 0.0613378 26.4321 0.170146 26.2675L4.03418 20.4226C4.17718 20.2063 4.19526 19.9305 4.08173 19.6974L0.184267 11.6945C0.0701569 11.4602 0.0890317 11.1829 0.233842 10.9663L6.8461 1.07227C6.98212 0.868742 7.21076 0.746544 7.45556 0.746544H17.4595H30.5912C31.2284 0.746544 31.5622 1.50345 31.1325 1.97393L27.2736 6.19889C27.1347 6.35095 26.9383 6.43758 26.7324 6.43758H20.7561H16.8816H6.00285C5.75073 6.43758 5.51631 6.56714 5.38217 6.78061L2.75551 10.9609C2.61722 11.181 2.60582 11.4578 2.72553 11.6885L9.51493 24.7729C9.6458 25.0251 9.91065 25.1789 10.1946 25.1677L17.7839 24.8673C18.073 24.8558 18.3283 24.6754 18.4356 24.4066L20.7561 18.5956C20.7561 18.5956 21.6253 18.5834 22.592 18.3168C23.1855 18.1531 23.9029 18.6238 23.8428 19.2364L23.0573 27.2359H16.1268ZM20.7583 23.0169C20.6971 22.9046 20.6663 22.7782 20.6691 22.6504L20.7561 18.5956L22.2808 15.273C22.5117 14.7698 22.1229 14.2021 21.5703 14.2356L18.3225 14.432C18.0543 14.4482 17.8165 14.6098 17.7027 14.8532L14.1861 22.3747C13.9296 22.9235 13.1558 22.9419 12.8735 22.4058L9.95122 16.8568C9.8163 16.6006 9.84484 16.289 10.0241 16.0615L12.608 12.7824C12.747 12.606 12.9592 12.5031 13.1837 12.5031H28.8526C29.3903 12.5031 29.745 13.0627 29.5156 13.5489L23.0573 27.2359L20.7583 23.0169Z"
      fill="white"
    />
    <path
      d="M34.8291 29V9.82016H42.7203C44.419 9.82016 45.8712 10.0942 47.0768 10.6422C48.3007 11.1902 49.2414 11.9756 49.899 12.9985C50.5566 14.0215 50.8854 15.2362 50.8854 16.6427C50.8854 18.0492 50.5566 19.2639 49.899 20.2869C49.2414 21.3098 48.3007 22.0953 47.0768 22.6433C45.8712 23.1912 44.419 23.4652 42.7203 23.4652H36.8019L38.3911 21.7939V29H34.8291ZM38.3911 22.1775L36.8019 20.4513H42.5559C44.1268 20.4513 45.305 20.1225 46.0904 19.4649C46.8941 18.789 47.296 17.8483 47.296 16.6427C47.296 15.4188 46.8941 14.4781 46.0904 13.8205C45.305 13.1629 44.1268 12.8341 42.5559 12.8341H36.8019L38.3911 11.0806V22.1775ZM54.3812 29V14.3685H57.8062V29H54.3812ZM56.1074 11.9573C55.4681 11.9573 54.9383 11.7564 54.5182 11.3545C54.1163 10.9527 53.9154 10.4686 53.9154 9.90236C53.9154 9.31783 54.1163 8.83377 54.5182 8.45017C54.9383 8.04831 55.4681 7.84738 56.1074 7.84738C56.7467 7.84738 57.2673 8.03918 57.6692 8.42277C58.0893 8.7881 58.2994 9.2539 58.2994 9.82016C58.2994 10.423 58.0984 10.9344 57.6966 11.3545C57.2947 11.7564 56.765 11.9573 56.1074 11.9573ZM70.6036 14.2041C71.7726 14.2041 72.8138 14.4325 73.7272 14.8891C74.6587 15.3458 75.3894 16.049 75.9191 16.9989C76.4489 17.9305 76.7137 19.1361 76.7137 20.6157V29H73.2888V21.0541C73.2888 19.7571 72.9782 18.789 72.3572 18.1497C71.7544 17.5104 70.905 17.1907 69.809 17.1907C69.0053 17.1907 68.2929 17.3551 67.6718 17.6839C67.0507 18.0127 66.5667 18.5059 66.2196 19.1635C65.8908 19.8028 65.7264 20.6157 65.7264 21.6021V29H62.3015V14.3685H65.562V18.3141L64.9866 17.1085C65.4981 16.1769 66.2379 15.4645 67.206 14.9713C68.1924 14.4599 69.3249 14.2041 70.6036 14.2041ZM86.5659 29.1918C84.9584 29.1918 83.7163 28.7808 82.8395 27.9588C81.9627 27.1185 81.5243 25.8856 81.5243 24.2598V11.1354H84.9493V24.1776C84.9493 24.8718 85.1228 25.4106 85.4699 25.7942C85.8352 26.1778 86.3375 26.3696 86.9769 26.3696C87.7441 26.3696 88.3834 26.1687 88.8949 25.7668L89.8538 28.2054C89.452 28.5342 88.9588 28.7808 88.3743 28.9452C87.7897 29.1096 87.1869 29.1918 86.5659 29.1918ZM79.1131 17.2181V14.4781H88.8675V17.2181H79.1131ZM98.7656 29.1918C97.2678 29.1918 95.9343 28.8721 94.7653 28.2328C93.5962 27.5752 92.6737 26.6802 91.9979 25.5476C91.322 24.4151 90.9841 23.1273 90.9841 21.6843C90.9841 20.2229 91.322 18.9352 91.9979 17.8209C92.6737 16.6884 93.5962 15.8024 94.7653 15.1631C95.9343 14.5238 97.2678 14.2041 98.7656 14.2041C100.282 14.2041 101.624 14.5238 102.793 15.1631C103.981 15.8024 104.903 16.6792 105.561 17.7935C106.237 18.9078 106.575 20.2047 106.575 21.6843C106.575 23.1273 106.237 24.4151 105.561 25.5476C104.903 26.6802 103.981 27.5752 102.793 28.2328C101.624 28.8721 100.282 29.1918 98.7656 29.1918ZM98.7656 26.26C99.6059 26.26 100.355 26.0774 101.012 25.712C101.67 25.3467 102.181 24.817 102.547 24.1228C102.93 23.4287 103.122 22.6159 103.122 21.6843C103.122 20.7344 102.93 19.9215 102.547 19.2457C102.181 18.5516 101.67 18.0218 101.012 17.6565C100.355 17.2912 99.615 17.1085 98.793 17.1085C97.9528 17.1085 97.2038 17.2912 96.5462 17.6565C95.9069 18.0218 95.3954 18.5516 95.0119 19.2457C94.6283 19.9215 94.4365 20.7344 94.4365 21.6843C94.4365 22.6159 94.6283 23.4287 95.0119 24.1228C95.3954 24.817 95.9069 25.3467 96.5462 25.712C97.2038 26.0774 97.9436 26.26 98.7656 26.26Z"
      fill="white"
    />
  </svg>
);

export const TwitterLogo: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.1425 0.750488H6.76875L12.6656 9.18424L19.7437 0.750488H21.8606L13.4719 10.3392L22.5 23.2505H15.8775L9.71813 14.4436L2.115 23.2505H0L8.91187 13.2905L0.1425 0.750488Z"
      fill="white"
    />
  </svg>
);

export const InstaLogo: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6564 0.75C13.922 0.753375 14.5644 0.760125 15.119 0.775875L15.3373 0.78375C15.5893 0.79275 15.8379 0.804 16.1383 0.8175C17.3353 0.87375 18.152 1.06275 18.8687 1.34063C19.6112 1.62638 20.2367 2.01337 20.8622 2.63775C21.4344 3.19995 21.8771 3.88028 22.1593 4.63125C22.4372 5.34787 22.6262 6.16462 22.6824 7.36275C22.6959 7.662 22.7072 7.91062 22.7162 8.16375L22.7229 8.382C22.7398 8.9355 22.7465 9.57787 22.7488 10.8435L22.7499 11.6827V13.1565C22.7526 13.9771 22.744 14.7977 22.724 15.618L22.7173 15.8362C22.7083 16.0894 22.697 16.338 22.6835 16.6372C22.6273 17.8354 22.436 18.651 22.1593 19.3687C21.8771 20.1197 21.4344 20.8 20.8622 21.3622C20.3 21.9345 19.6196 22.3772 18.8687 22.6594C18.152 22.9372 17.3353 23.1262 16.1383 23.1825L15.3373 23.2162L15.119 23.223C14.5644 23.2387 13.922 23.2466 12.6564 23.2489L11.8172 23.25H10.3445C9.52358 23.2529 8.70262 23.2443 7.88191 23.2241L7.66366 23.2174C7.39659 23.2073 7.12959 23.1956 6.86266 23.1825C5.66566 23.1262 4.84891 22.9372 4.13116 22.6594C3.38059 22.3771 2.70066 21.9344 2.13878 21.3622C1.5661 20.8002 1.12303 20.1198 0.840533 19.3687C0.562658 18.6521 0.373657 17.8354 0.317407 16.6372L0.283657 15.8362L0.278033 15.618C0.257294 14.7977 0.247918 13.9771 0.249907 13.1565V10.8435C0.246794 10.0229 0.255044 9.20235 0.274658 8.382L0.282533 8.16375C0.291533 7.91062 0.302782 7.662 0.316282 7.36275C0.372532 6.16462 0.561532 5.349 0.839407 4.63125C1.12256 3.87997 1.56641 3.19962 2.13991 2.63775C2.70145 2.06574 3.38099 1.62308 4.13116 1.34063C4.84891 1.06275 5.66453 0.87375 6.86266 0.8175C7.16191 0.804 7.41166 0.79275 7.66366 0.78375L7.88191 0.777C8.70225 0.757012 9.52283 0.748386 10.3434 0.751125L12.6564 0.75ZM11.4999 6.375C10.0081 6.375 8.57732 6.96763 7.52243 8.02252C6.46754 9.07742 5.87491 10.5082 5.87491 12C5.87491 13.4918 6.46754 14.9226 7.52243 15.9775C8.57732 17.0324 10.0081 17.625 11.4999 17.625C12.9917 17.625 14.4225 17.0324 15.4774 15.9775C16.5323 14.9226 17.1249 13.4918 17.1249 12C17.1249 10.5082 16.5323 9.07742 15.4774 8.02252C14.4225 6.96763 12.9917 6.375 11.4999 6.375ZM11.4999 8.625C11.9431 8.62493 12.382 8.71215 12.7915 8.88169C13.201 9.05123 13.5731 9.29977 13.8866 9.61312C14.2 9.92646 14.4487 10.2985 14.6183 10.7079C14.788 11.1174 14.8754 11.5562 14.8755 11.9994C14.8755 12.4426 14.7883 12.8815 14.6188 13.291C14.4492 13.7005 14.2007 14.0726 13.8874 14.3861C13.574 14.6995 13.202 14.9482 12.7925 15.1179C12.3831 15.2876 11.9442 15.3749 11.501 15.375C10.6059 15.375 9.74748 15.0194 9.11455 14.3865C8.48161 13.7535 8.12603 12.8951 8.12603 12C8.12603 11.1049 8.48161 10.2464 9.11455 9.61351C9.74748 8.98058 10.6059 8.625 11.501 8.625M17.4073 4.6875C17.0343 4.6875 16.6766 4.83566 16.4129 5.09938C16.1492 5.3631 16.001 5.72079 16.001 6.09375C16.001 6.46671 16.1492 6.8244 16.4129 7.08812C16.6766 7.35184 17.0343 7.5 17.4073 7.5C17.7802 7.5 18.1379 7.35184 18.4017 7.08812C18.6654 6.8244 18.8135 6.46671 18.8135 6.09375C18.8135 5.72079 18.6654 5.3631 18.4017 5.09938C18.1379 4.83566 17.7802 4.6875 17.4073 4.6875Z"
      fill="white"
    />
  </svg>
);

export const FacebookLogo: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.999 0.793945C18.2124 0.793945 23.249 5.82944 23.249 12.0439C23.249 17.6577 19.1349 22.3118 13.7574 23.1567V15.2952H16.3786L16.877 12.0439L13.7574 12.0428V9.88057C13.7743 9.00982 14.2198 8.1762 15.5911 8.1762H17.0086V5.40645C17.0086 5.40645 15.7216 5.18595 14.4909 5.18595C11.9608 5.18595 10.2946 6.6957 10.2429 9.4317L10.2406 9.56332V12.0417H7.3854V15.2929H10.2429V23.1544C4.86315 22.3118 0.749023 17.6577 0.749023 12.0439C0.749023 5.83057 5.78565 0.793945 11.999 0.793945Z"
      fill="white"
    />
  </svg>
);

export const LinkLogo: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="21"
    height="25"
    viewBox="0 0 21 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 0.875C18.1451 0.875 19.0036 1.23058 19.6365 1.86351C20.2694 2.49645 20.625 3.35489 20.625 4.25V17.75C20.625 18.6451 20.2694 19.5036 19.6365 20.1365C19.0036 20.7694 18.1451 21.125 17.25 21.125H3.75C2.85489 21.125 1.99645 20.7694 1.36351 20.1365C0.730579 19.5036 0.375 18.6451 0.375 17.75V4.25C0.375 3.35489 0.730579 2.49645 1.36351 1.86351C1.99645 1.23058 2.85489 0.875 3.75 0.875H17.25ZM6 8.75C5.70163 8.75 5.41548 8.86853 5.2045 9.0795C4.99353 9.29048 4.875 9.57663 4.875 9.875V15.5C4.875 15.7984 4.99353 16.0845 5.2045 16.2955C5.41548 16.5065 5.70163 16.625 6 16.625C6.29837 16.625 6.58452 16.5065 6.7955 16.2955C7.00647 16.0845 7.125 15.7984 7.125 15.5V9.875C7.125 9.57663 7.00647 9.29048 6.7955 9.0795C6.58452 8.86853 6.29837 8.75 6 8.75ZM9.375 7.625C9.07663 7.625 8.79048 7.74353 8.5795 7.9545C8.36853 8.16548 8.25 8.45163 8.25 8.75V15.5C8.25 15.7984 8.36853 16.0845 8.5795 16.2955C8.79048 16.5065 9.07663 16.625 9.375 16.625C9.67337 16.625 9.95952 16.5065 10.1705 16.2955C10.3815 16.0845 10.5 15.7984 10.5 15.5V11.3825C10.8431 10.9955 11.4225 10.541 12.0671 10.2654C12.4417 10.1056 13.0054 10.0404 13.3969 10.1641C13.5268 10.1971 13.6424 10.2713 13.7265 10.3756C13.785 10.4544 13.875 10.6299 13.875 11V15.5C13.875 15.7984 13.9935 16.0845 14.2045 16.2955C14.4155 16.5065 14.7016 16.625 15 16.625C15.2984 16.625 15.5845 16.5065 15.7955 16.2955C16.0065 16.0845 16.125 15.7984 16.125 15.5V11C16.125 10.2463 15.9338 9.57575 15.5355 9.038C15.169 8.55038 14.6562 8.19282 14.0719 8.01762C13.0571 7.69925 11.9333 7.87587 11.1829 8.19762C10.9426 8.30095 10.7086 8.41815 10.482 8.54862C10.4348 8.28941 10.2982 8.05497 10.0959 7.88618C9.89359 7.71739 9.63847 7.62496 9.375 7.625ZM6 5.375C5.70163 5.375 5.41548 5.49353 5.2045 5.7045C4.99353 5.91548 4.875 6.20163 4.875 6.5C4.875 6.79837 4.99353 7.08452 5.2045 7.2955C5.41548 7.50647 5.70163 7.625 6 7.625C6.29837 7.625 6.58452 7.50647 6.7955 7.2955C7.00647 7.08452 7.125 6.79837 7.125 6.5C7.125 6.20163 7.00647 5.91548 6.7955 5.7045C6.58452 5.49353 6.29837 5.375 6 5.375Z"
      fill="white"
    />
  </svg>
);

export const ArrowIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="59"
    height="59"
    viewBox="0 0 59 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40.7802 19.8236C40.7801 19.3687 40.5994 18.9325 40.2778 18.6109C39.9561 18.2892 39.5199 18.1085 39.065 18.1085L25.3415 18.1085C25.1138 18.1045 24.8875 18.1459 24.676 18.2304C24.4644 18.3148 24.2718 18.4405 24.1093 18.6001C23.9469 18.7598 23.8178 18.9502 23.7297 19.1603C23.6417 19.3703 23.5963 19.5958 23.5963 19.8236C23.5963 20.0514 23.6417 20.2769 23.7297 20.4869C23.8178 20.697 23.9469 20.8874 24.1093 21.0471C24.2718 21.2067 24.4644 21.3324 24.676 21.4168C24.8875 21.5013 25.1138 21.5427 25.3415 21.5387L34.924 21.5387L18.8606 37.6021C18.5389 37.9238 18.3582 38.3601 18.3582 38.8151C18.3582 39.27 18.5389 39.7063 18.8606 40.028C19.1823 40.3497 19.6186 40.5305 20.0736 40.5305C20.5285 40.5305 20.9648 40.3497 21.2865 40.028L37.3499 23.9647L37.3499 33.5471C37.3577 33.9969 37.5419 34.4255 37.8627 34.7408C38.1835 35.0561 38.6153 35.2327 39.065 35.2327C39.5148 35.2327 39.9466 35.0561 40.2674 34.7408C40.5882 34.4255 40.7724 33.9969 40.7802 33.5471L40.7802 19.8236Z"
      fill="white"
    />
  </svg>
);

export const StarIcon: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="82"
    height="13"
    viewBox="0 0 82 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
      fill="#FFC44D"
    />
    <path
      d="M23.5 0L24.9593 4.49139H29.6819L25.8613 7.26722L27.3206 11.7586L23.5 8.98278L19.6794 11.7586L21.1387 7.26722L17.3181 4.49139H22.0407L23.5 0Z"
      fill="#FFC44D"
    />
    <path
      d="M41 0L42.5716 4.49139H47.6574L43.5429 7.26722L45.1145 11.7586L41 8.98278L36.8855 11.7586L38.4571 7.26722L34.3426 4.49139H39.4284L41 0Z"
      fill="#FFC44D"
    />
    <path
      d="M58.5 0L59.9593 4.49139H64.6819L60.8613 7.26722L62.3206 11.7586L58.5 8.98278L54.6794 11.7586L56.1387 7.26722L52.3181 4.49139H57.0407L58.5 0Z"
      fill="#FFC44D"
    />
    <path
      d="M75.5 0L76.9593 4.49139H81.6819L77.8613 7.26722L79.3206 11.7586L75.5 8.98278L71.6794 11.7586L73.1387 7.26722L69.3181 4.49139H74.0407L75.5 0Z"
      fill="#ADADAD"
    />
  </svg>
);
