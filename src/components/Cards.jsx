import { React, useContext, useState, useRef } from "react";
import ContextCards from "../context/ContextCards";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export default function Cards({ product }) {
  const { deleteProductForId, fetchProductsUpdate } = useContext(ContextCards);
  const mostrarFormFunction = ({ target }) => {
    console.log("hice click");
  };
  return product.map((item, index) => {
    const { _id, price, description, name } = item;
    return (
      <>
        <div key={`${_id}`} class="contenedorCard">
          <div class="card">
            <div>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTExYVExQXFhYYGRkbGBgXGRkeHRkcGBsZGhkZGxsaICoiGxsoIRoWIzMjJi8vMjAwGyE1OjUuOSsvMC0BCgoKDw4PHBERHDMlISYvMTEvLzc0NzEtLTc3MTE5LzQ3Lzc3MTEvMTEvLy8wLy86LzEvMTc3Ly83Ly8vLy8xL//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABDEAACAQMDAgQDBQYEAwcFAAABAhEAAyEEEjEFQQYiUWETMnEHQoGRoSNSscHR8BQVFnJiguEzU5LC0tPxFyRDRFT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAMREAAgECBAIKAQQDAQAAAAAAAAECAxEEEiExQVEFExQiYXGBkaHh0RWx8PEzQsEy/9oADAMBAAIRAxEAPwDuNKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKA+UpWvf1aJ8zAfU+pgfqRUXJLdnqTexsUqvdW8V2rBKsrswjCAGJ4DMTtWc8ntUJ1Hxy9uJsgBgSu26rTxBwuB757xNUTxVOPEvhhas9kXyvk1Rn8ZgglXRVAybgJaT2W2plvcllAkVo2/GvlBci4xb5VRl2LkZLEhmOMCPrVUsdBLQtjgar4HR5r5uHrXL7HiR2ZwHvP2t21SHIwCxZFMkS+I/dOTxHnxPfS8pi4EU+a0zkkkSDJdSwM9jMR+UO3rkWLo2b4nYq+VyWx4v1HxCzglDO1N0bRODKwCwE84PoMVIanxBqLfw3TUm4jFZS4tsOBGSzKgUZ7T3HNSWPhyPJdHVFodLFKp2r8TPZQM+1p42zLZiVABVgPL9+YP55E8c2AttnnziTththHIYYb8QCDVqxdNuzdih4Sra6Vy2zX2tHQ9Rt3QrI4IYSOxI+hzW7WlSTV0Z3Fp2Z9pSlengpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCvlK0+oa9LSguwEmFGZJgmABk4BOOwNeNpK7PUm3ZGy9wASe1Qet8QhQ2zaWU+bc+1E/3vGD/wAIk+1VjrHXDdd5dkQqdgUeZtvAxMSTyew7ZFQnTbSW1Nx/nBBVBzu5DNIjaDmPUVyK2Oea0dEdSjgO7eW/ImOreItU8G2j/Cky20w4H0AKKQD755FQ3UDuZDu3gENsCslsnEKlsHdtgRJySfz3LvUrrBgXMN8wAUTgDsBOAB3rDatuIIJkZBBgifQjP41gqYhye7OlToKK2S8iRNu0VNhlt2G2rttO5baGMtdzEsZIDHMrHeta10uzYLgxdDLAeAIJzIGZz3B7Y5NZbOmZpYgtGSSJz2JPr9a9PZJAB9f7NeSq3WiPIQtpfTj/ADc1rvQNqB2Cjd8qmZI5mOw4z7xWHTB0V1WAHG1scjI+o5qXs2MYGOMe04rLa0oxj/rUVa+hLO7WlqQuj01y3JQsu7BIJBI7DGa9N00nJWTnOMk96sWzaAQoJHY4B9QT29KL5+EZZ4BAn0+6SOZ4NWtLmV9brexWP8rzkRT/AC3sPrVkdORH9ivqab+/74quVuBYqvMrOv6KyBS21lYSrLlTxiY+n51orpecH86ua6BCH3HadpK9gSPY8ngep/Cta1+zO5VUmIG7jIifp7d/xmoyVmuCYhXumt2vQrrX3NgWmBhGDW2kgoc8xyMtz61L+GPEN+3cCXXL24MbgSZHA38ifUzwOK8Xen4wPT/p/SsuktHYUCqZ43KOcRBkQe34+9KeInFppirTpzi1b+czoOj1qXAGUgyAR9DwfxrarmuktvackABxMSOO4I9/0MmZmrx0rqS3VGRv2yy8EdjjmJruYTGKrpLRnDxWFdPWOqJOlKVvMYpSlAKUpQClKUApSlAKUpQClKUApSlAfKqviPVbiF5BkD2AEk/jgfjVmvtCsfQH+FVQWN7mTPc+04C/Ubf1rDjJuyiuJrwkVmcnwK7euXPOgMI+CIziO/8AfaI74rWgJj1HM/U1aP8AL8zH0/GsWq1CW22xJ2lmjhVUGWP4iB6n8a486EpO8mdeOJSVooi9PoQpG+ACYzj8B7+1SP8AlcCBzXtRvth1XJCsi3ZWDEgsIJVs8DI+teb2uGmtfE1FyeSSABzMBFmT25PqSYr2NCOzK5V5vVHlNLcGUZByrK4JVhj90ggjsfc44jYTQjPcT/T+lV3TfaDpWjf8RZA+a2QAe4ZhK84wTzWa9480aifibuICgky0ACAJmSKulRSsrEFKbu0Td67atRvHlaRMHnsMdzn8q9SF4WYH9zVXXxha+IAyOEnnBgD2/pJxVn/xtu5b3WmQqYzziPQEVDSO6sezpzja99T6L05AP1gwI5n0pqVu7ZtFVft8QEr9CBng1GeIPEi6K0tx42yEAAySZgAfn+VVNPtRUnaUdbcQTClvqI4qcNdVF+wVKctrF/8AgORnLcEnBOMnHqfSvduy4OQPTH6xXNeq/axs/wCzthzPqVIHvIMGJ/oBVl8O/aBptSpPxVssPmS7AP1BBgj3qUoNLNlZW817X15Fjv2JjcgIBleDBHBHvz+deU0+45GMGtYa/ewX4qZ4EiT3wP1rlWq+0nWfFuJKBAzqAF8ygEgGScmoQg6l7InZqyvqdev3QpjyhW+aTERxPrP6c9qwF9sBLe/e22ZEIDksT6QDx3j1qg9K8cKEZtRc+KTgIFAOQRBXHtz+gqR0niG8RDOLUxstW1woM+Xc0hjBU4AjIjufY023qtizqpLRFzvaEnO4sR3MTHbgCs/T7TAoYz/ZOf5ek+gqk63xJesjf8dduxm2sEJMjBhQJOPwwMzWx0Xxob1u47OgW2BKnBY5KsDiCYUHtzgVLq1CWYjOlUcLaWOqW3kA+omvdafSbwe0jj5WUMv0bI/Qityu3F3SZw5KzaPtKUqR4KUpQClKUApSlAKUpQClKUB8mvlfaov2jeNW0Rt2rIU3rgLEuCVtoDt3QCJJMx/tNRlJRV2Tp05VJKMdyxeJOqWrFpjduIkq20OxG4gTHl8xHEwDiqfd8QhbTXLAi15YcnJJZU8qsNzQCOYziqbqda97bdvubjiSFIDQpE+bIHMyBwQPYVrag/Et3FQbCyyonBa2Q6gHsfLH/Ma5OIr5ppW05neodHKELt3fwTd3W3LgBu33bcfk3FUJ7AqoG7AX9TUX1vSFgf2hYDkGY+/GWwfKAOSTvGOahLHUGVQHkbSDBHfPqMGD/ea96nXFxkz3APYiQP4mqoXT7xvjQW8SS8OaB287XWW0vmIV2UDaTIIBHpweBHNRHWOrm+0iRbUGBJJO0QNzHJY8cxkczUtqtds07ncCxtgRiSHMbj6cn17GqdefylR7SPWJaSfwFXUrSblyKKyaWnE1tdrItIpXcTkEz7+vPb8vrW94cZy4VmJVASBPlDEhVzz3P0ie1edUyWwm+2GgALIgEAAtJOeSeIqweEGDW2dgoVTttqBieWJJ5J8onPy1fUmsm3qZoU5dZq/T8m811G2LtIglQDyzSjCZIAUkiScRuOcR56bq7i3CbTPIIiDG4ZMlWB8sQYPEjNY9Rf2wsb9zEy0DCjEbsCAI9M1i0WscBjbtDABbJwAO5JxzwPT2qhPPw0NzSitTx4mt6jU7T8QOqsW+GYBn5ZBmDgnBjk81W+pXkZQqqwZTkRGfee9dG0xF5Q9yUDKMEEgYExA5xyRUP1t7FoE21Dt3Z+TBjavBMYk8AR7VCnWTllS2ITppRfC+5RdN0m5cyFMExuOASTgScSakNF0hkdWABZWkDkSDwfUe3f3rZ1mpd1G7CrARRwpfdmB3IAyc4qR6D5rbs7CbZCwe4YSpieTBHvt/LW5y4meFGK1tx0LN0nqwa4Huaaw1yZa6FCuMRIJDbmke36VHW/DGmuPed3YXL1x3twcBdxZpA+QTIBaZHHrWo/VN1oMrRuzxGWMnivGnvO6kE9isx6+v1k/XNYVUlFtpabGjsqklLiedfoksWLbLHxNzNuIJ3K6oFMwO6tH1P4Ri9QIggzHr/Xk9q2besuJgOe8yAR3kQZB5P615e9buCLihS331BkEe3cGYj3n63xZbkklzMfV9dv08SZDLxkASNoM8D5zPuPesPQunXL2FbavDEzA5MEDLEz6/xrcXo7NZugsAAV4YQ3mWGj93kgx68ZrUtH4FxfhXQbgBwgMyRhSYIeeO9SbbWWL1M0opNy4eZ0/wJ1W9priWXvfE05AVVYEG36FDnyjjYTxkcQer1wf/ABJ1Ol+IF2gqQxU/8jFe6sDPM8ggkYHQ/sw8QPqNO1q8ZvacqjN/3iMs2ruf3gD+Kk94q/CVJaxnujlY+hFJVILR7l3pSlbTmilKUApSlAKUpQClKUApSlAea4Z9qumcdQdmJ2stoqP+BQQfyYN+ZrulV3xX4ZTWKJOy4nyPExMSCsjcDH9O8014SlC0dzZga8aVZSlscl0iL8K8zD7mPYkc/r+RNR/Sek3NU6qrhBbB3GCcE4x37+lSvUvD2qFx7Qe2UAIe4rEKNo3uBbA3ELwYxJA5mJvw90QaUEm58QuFyBAjJHqTzXz2LlLDU23pJ7cT6NYqnO+R3ZE6jwAG41Dz3MRP5NNfbH2aAA//AHV2fwj+Jq4C+BVO8VePvgt8LTKLl3ieVU5/M44rmYXEY6vLJTl8Iy1puPek7eJnveA2FplGoLSAAXWI2ncACp4n1BqL0Xgi+rEOth0bElpK8iRKgjnsfSqtotR1DXXQDecsZJG/aFURkg+VB6dzVtHSCoAY3A5HO6/LEH5gqsVCkkdiIHvntdmxFNWlNO/h/RXTxLmvyW3Q9C09tSGVGJJLGMSeyg8KOBUd4i6WNgGntgAchQo55+tc0691m/p7pW3dvAfuu7Er7SeRM+44rN0vrWsuKXFy4dpG5QeFPckiBPHr7VlXReIUs+dPzv8AsexxcYz4trgSPVdNcDftUdFIiQuB3J/E7cen0rPY6hCC0o8sEMyj5jtKgoTleO8TuJI9dzR9Z1TlAryXLQirbbgA7G3L8wB5GZEc1J6TzBW1Nssp4ixFyTgFTaI/UEYPEVug60Y2aXo/ounWg3eSIPqmuu3GFm0Qq21BuCQMDGSZ49Kr3WNcT5d0hSeYHm4JxzgKJ9sD1+9T1jfENsiHUnK8PBIVsE8fUxPJzWjYs/tP2s7Q0tCzG2TBBIxiD6Ce+DfRpZVZ6CVZNXjqbnTtCzhtqsxLL5QCTIUGPaNx/vi0eEfDN25duG7bZEhYDCNx8wie8T/8VI+BdcmmtFXUs7EuzKpMbs/cnaPqB/KrVpPFekvEfDvJuMHaTBzwYMGD9K5eOxVeOeMIO3OzK+u0SW/nx8jSfwdpxHlZQOyNA9fQx+Fe9P4UsqTs3AH1bd796sFxsT2PB7fnXlLsGuA8ZW/8uTseqrO2jKR1bwSCxKOc5I4zUDq/B94DyruA5zkfnXVLrAmqz4064lj9mjReZC0AAwBwSJGCZ/8ACa3YPGYipNQjqXRxckrSKMnR7VgFtVdFqcAK0sQPbuPatG3oNIWLJq5nI+IhT6Zhh+JFVzVNuZnu/EduS3PpzI8oBK/mBU/0XSTYtv8AsyksGJG8qQy5KlfKYLRzOOAcfT9RKMczk7+FrGJ4vPPKopEvY1zaNYW5KPMgrbe224iSGRvLgAESAT5v+EdM+ybS3Sj37lsW1e3atoBPmFtrrs/myVJuwvsK5Z0XopF2WwqDeGLMACo3B12gyUADx/4hxX6P0tzcqt6gH8Y7jsa10Y6Jt3fkYMVUteK2eu90bFKUrQYBSlKAUpSgFKUoBSlKAUpSgFKUoDgfjDxcC020exfYftUcsoYbviI1rCtBbzfdmB6yd3wh4gtPok+Jdto9qbbAso8qmLZGeNu0fUGrJ9oPjBtPf+DaTc+wlgsqxMAr5tp8ucifT1xy3V31uNcdLFhSN0/FF197BSzHeGAWRJhhGOTyeRi6Halkadk99N0dShLq7TfsbfijxmXm1p2AXhrhBHt5R/P+NVXTWFQlxuaRG5WVipI8zAlYDTJBwRPOMyWt6+yhBatpaFxUK7LaQJLAjzAk5WMnsa89M6rfuHiw3ruspuUfvQoH9Kso4d0I5YJe+r+Cc60ajvLX02M3R+ujTi4u8AuEGRPDKSwj5WgR37j0rYtdWDbrhuMzRsVmQqFUMSeJg5bEnkZxWP8AbbWIe2gwJ2IoJYEwABuYwDgA8EV56bd1LyIBXB3/AA127e5DQJEEHvNSkpb2+fonGSvYitdZFy4SsNMeYHtAHb8cCa+6e+tsSd3PG7bMYzBn6R78VM9T1hs71gGCoXfZtyxaTMsp+nepTpHVri2ka58Iq5KBWtWxB7GFQTkNmYiKjOpUy3y39fo9UYqVluV214mKNNvyNPlKEgriPLk9sVvDrOruMotm4SII2q544aFEz7mKtOn1mmsupv2NMxaW3WlQugBPzWxOIEmDIkYzV+6frLT21eyVZDwUiMdsd/asWJxrpbwt4t6BLxucb1v+IuWmD2GDYlxbYHHqey4HpHPaonpmluozN8FrklSxAJ2jcTggGJwO3f2Nfoe/fS2u92CgDkmPzqua3xegYqjAHENdLqDIPBCn07wMjORUaWPqydowv5EJWetjk/VNfcuXbhDM0x8uSIVEyAvmEJGBGfSvmlRNu1hbRTB2vgnapUAhuDJLfzq7a3xbcLMlsorqpJ3TDEgFQB659f8ApC9L8Xa67ce1FtfKSxNvIHlBJBaIz6fnWqNWvPXIl6/RJKMdHrcj+leKr+meLVwXLQ5tu+78Ax49pkY/GujdI67b1NsXLZI7Mh+ZG9D7e/8A0JpF29cFoqR8Myp+JbVSqsSPnkFgCMRmJ/Go3pWtv2rr3jcX9mIdCu0OIB2cTugkgnvPYmsuKwSrxbSSf7/BdCSi+LOo9S6itm21258qCTHJ9APcmAPrXEdb1R7t65euBjcdpjzeURCqMZgYE+g95uHi3qja20gt77doQxBjczElVB2sQFEE+5I9qqnS9TtM/HZNsEku43Dvt2sCTxjFS6KwboU25LvP4X2VV53kuCRuabXs9kWPhuE+KLhO0nzAQSSVP3YEYGBM1t9V1qacFLFxTbcecICNphxgtmQSGH0UYg1K2NbfVEcahdrMArm4WEE7flJL8+gMTzgw6jqdQBN64QhiCjruIYsEIC5EhGMHJFbc1S+sVZeP0eKMOD1ZveHn/wARfs6LTXbNoRca6zH4qXsW2KpbbymCXGzAOxnMyRXdNJp1toqKIVQAOTge5ya/NWr103baWHPxN6BbjYCncILMOAMHcDiCfr+hfDfWV1dn4iqVhmRlPZkMGD3Hoa2UZuSu1Y5+Khle9yYpSlXmUUpSgFKUoBSlKAUpSgFKUoBSlKA5V9sejS1bW8h23L1wIzFj2RmgAHEhSPrtyO/J9T1Tcly3agAhkkGSVZgYZsk4BEe/E11j7TOqXry3Ldq1Nqy37RiFJ3QZO1vMAomSMQeeQOUaHUOQZtWdo5dg3l55gE9vSsU5NSeVHSoxzQ7z/wC+Rqa9kujYu1FVjsJcyqn7hWDJmTgwY9ZNbXTdULIGwBp+bcwysztH7skLOMxAIkVM6PW6S06K+mtXUKzcuBASp7whJJA9R7RJroVnoejZVZdPYZSAykW7ZBByGBjIIzNYcX0l1Fs8XZ8dC6FBO6TOX6rqYvKqEY8paXl2cTnc0gyWJ2gxJPrWC7qAQVcm2IlQATAjaPKOMRwIwfau1aXTWxG1FEcQoH8K3Lm2O1ct9Op/6fP0XqOXRHAL1wXLaIt3aocGHgRiJkgH14wJk+tSba6wI+I6MUOYJMwDwY2kTBEA8HOQR261siXgL6n+XrVd6j400iFlthWKgkkCQIwZYYx6CTWil0lOrHuwfkn9EHZNu3qcvbrtsy0EhskDfuEYMkjbmTETEAV56d4kaz57Vw23EAhh5bwn764Egfe59x3tur+0dzIs2tywYZsJI5BDoo/U8GtL/V+pZC3wlkiQUsgLxuIR2MMYzwfmFbYurOLUqe/Btfgg2uLXyQXXPGL6i4rsQFUHaimEBwJ80FjM57AiIzOuOt/EPmgGQPIEO4AcCSQJxxzn1mrd4f8AFmqur5oUQ3ndMEAEyNkA5AHpnmti91LU3iVt3hbEwGNvyn/iBO7yk44wa8hUnT7kYJJeP0SjC6vf4KauvvtDsmBIJVFIiQQuZhe2Pp9NTSq9t2drVyWWJ2sIIgkxiRgiO0ir7dS9bKq2s8xgjbbU/wDMSoAOYEY5yOKhuu+K9bZZUTULBBBYLADD7ssGAaCDGauUq0tFFa+L/B5PJFZuRBN1G6bYsk3SgAC71nZtMgLuWYECBMY96+XepMx/aOWEqdsETtB2/LgkH39uMVt6Hx1rrjBRejBJZ1BEL/sA9hxUzpvF2vG0TactxkqfSYZeJxXk+uj/AKr3/KJQqRf9FZ6kxuSyTEsTtJVQTmGJOIGM9p9ogPhNPce59s9pJ7ZFdF1XjjVhgnwVuT/3bSPcfL/DFeLf2gaZvJq9IAQYIKJcA9Z3AGeeAajGvXiv8d/Jpv2IVFCW7t729ys9O2hZJ2wR5t21WIGZxg+59a9ahU8pLLAysFTIMzBBJkGPYGeO/T+mWOmagA27WnaRIARJg8ShAIH1FSzdG0oiNPZxx+zTH0xisFXpeEG7xafsWqDasct6MtxriXLWku3baukFLLvu+GZILDgkwDHHpiv0P4f0zW9PbR5DBZIMeWSSEkATtBCzydskkyaqvQ9da01+1ZVQgvswhVgEqs7jHfgfSfSr7XZwFaNakqiVrnMxd1PK+B9pSlbjIKUpQClKUApSlAKUpQClKUApSlAcn8a9QSyt8/BvWmuC5abcu20Q7XX3K/yuXLMxA3N+0YwK5JpuobbTDyKfMIBEwQBJH3vmwT6Gv014iuhUEgHmARI47+orkvi57F28qm2ijaJKqJyxjIAyB/OsVeeV66nSwsc600Kf0/qlkWxvIZ1bEIY2sEU/IQVgBu5kn2q2+CvEK3d1iCpQbk3T5l++AT6EyB2DQBC14s+HtMwwMR+8/P54rU1Phdrb/E093ayeZJ5kYgtwQeCCIIJB5rm4iVKvB05acvM3xpSg8y1L6L0CtHqnXE06G5daFHYcseyr71j6P4hsXbLfEi3eQftLROR7oDllPb6waoHiS9dvOHuIyoMW0IwoOZJ4Lkc/l9eLhejm6tqisluXdYnFtLU0eueOrmpc70ZbXZFmIz84xv7eWQOZmoq11RMFl27ZUDbIKknynMgAEr7j1rb/AMGX4T8gTW5pPCmouDyqVHq3l5+ua+mhOjTjlSsjC6U273v6Gkeq2ijBX7klWlVO4jhBnEzAaOTEYqMt6xEgTu9QC4Bj94cHnsPWpvXeFb9sEvbJUfeB3CAefpWx0bwq96NqDb3ZgNq/WOfpFS66kle571VSXIjF6ujciFkQFaIxA7wTyZMTmmj6sEXaGC/KZ3ZBBkEHbMwSCBjj0qzavwS6qBNthiIXj8SJiSfrFSXT/BFhYNwsx7qoAHHtmqniKKWhYqVV7tEJpPFCm2Le9QVIAJYgFATKNHzTJEkHBPtFd631JbjMWIbOSpOY7xEbuM/lGIvuu8G2mEWndW94I+nr6VVP9M3zdNv4ZLevaP3t3AFSp14PW55UpT8Ct6W8lshlJMZAg8nBBntBPH51ML1G3cGRaG0H5vKPfAgk+35elWW99n7osi8GbuNhEfjOfyr3a8AkgbrwBngJ9O5Ir2eKpPiRhQqR2S/nqQ+n6pBVw3xVBI8wIJGP3SCSBGRHA+lavUPhXtpdgCAAzTyFEzxIPA5A5zxU9d8DRlLiE9vLBx75/pUJrPDzoQWt49SARj3E4qEKlO/dkWSU2rOJ4ua2zbW2ihH+GWJeZncbQFsNwIVGO4Cc4PNWjwh4sKLbTUXS4cEo0FnUKSPPtk9jzn68itaLQW8B7ax6ws5zz+QzV56F0XR3WTdYtxIBUgmYUkwGJAgn0PzH1Fe4iNGtHJNX8eJnjGpTeZexM+Dt2q6kbqoXtWJ23eEAa2uwA/eclnbHa5mIAbq9QvhjRJZtsltQq7zAAAAwMADFTVbsPCMIKMVZI5teTc3c+0pSryoUpSgFKUoBSlKAUpSgFKUoBWNnj1rJXl1B5E0BR/tH6mq2AVYb0bdAOSIIIj1yD+FcV1/VhcbfOfrxj+UD8q/TF/ptpxD20b6qP6VTerfZPob7Fv2lsn9wqB+q1nqUM7ua6GJ6tWscc03WCJ80Y9Rk55z/AHFSFvr/ABLRGe/sSD3Of41eLv2Hab7mqvr9dh/lWhf+w5//AMeuP/Pbn+BFZ5YJM1x6QRXl61bd1chNwwWYTAPPAx+fet8eI0cbeVnMwcduDiZ4juKz3PsX1g+XVWW+quP5mtO59kfUxgXNOw/3OP4rUHgWWLHwZK2OrWoAxjgAiOR6f3/CtsdTtkYYduff9J5qtf8A0t6svHwT9Lh/9NeR9nXV14tWz9Lw/nVMuj5E1j6fMsz9RU4kQf1zFe7PUUURuUDt+lVC74C6wONMPwuoY/UVg/0Z1hTP+Ef8Ltv/ANf8q8/T5ku3UnxLrf6gPz4yJn19f771i/zBDw35QP4nPeqaPCvWB/8Ap3fwa3+WG4ryfCvVf/5L+Z/c74n5vSa8/T5Dt1PmW869BO5hnGOI/pzz7+hrJY6kik+YD+vaPzFUw+F+rdtHdzE4WMdsMJHtxNff9IdVOf8AB3fp+zUfo/8Ac172CQ7bT5l3u9SU8MPpM89yO39471h/zJTgHP8AD2/v0qo/6J6ueNJd783LQknuZuc8ZrJZ8BdY76V/xvWP/cxT9PZ526nzLI3UF5Dycj+/0/T1rENaAMlYOAPUDv8A7ff1qKX7OernHw7ag8zdXtJHyzx+tZk+yrqx+/YX63X/APKnuakuj5Hjx9M1dZesgkgASeMY/HinSvEFuyNzP6d8iADzzyBme1SVr7Ftc3/aauyv+0O38QK3dJ9hbSDd1s+y2v6vWiGDa3ZnqY6D2R0TwXrg2mV7jqGuEvtJAKhvlBHYwAY7TVjVgeDP0qodC8BW9PB+PdeP3hbj8ipq22rQUQAB9AB/Ct0VZWOZN3k2ZaUpUiIpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAfIpFfaUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAf/9k="
                alt=""
              />
            </div>
            <h2>{name}</h2>
            <h4>{description}</h4>

            <h4>{`Price: ${price}`}</h4>
            <button onClick={() => deleteProductForId(_id)}>
              <span>Delete</span>
              <BsTrashFill></BsTrashFill>
            </button>
            <button onClick={(e) => mostrarFormFunction(e)}>
              <span>Edit</span>
              <FiEdit></FiEdit>
            </button>
          </div>
        </div>
        {
          <div className="contenedorForm">
            <form class="formStyle" action="">
              <label for="">Product Name</label>
              <input
                type="text"
                required
                placeholder="Product Name"
                name="name"
              ></input>
              <label for="">Description</label>
              <input
                type="text"
                required
                placeholder="Product description"
                name="description"
              ></input>
              <label for="">Product price</label>
              <input
                type="number"
                required
                placeholder="Product price"
                name="price"
              ></input>

              <button class="btn">Save</button>
            </form>
          </div>
        }
      </>
    );
  });
}
