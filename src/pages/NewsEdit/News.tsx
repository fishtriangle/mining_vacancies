import React, { useRef, useState } from 'react';
import styles from '../Edit.module.scss';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { UPDATE_ENTERPRISE } from '../../graphql/mutations/enterpriseVacancies';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const enterprisesInfo = useSelector(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // TODO state type should be written
    (state) => state.enterprisesInfo.enterprises
  );

  const fileItem = useRef<HTMLInputElement>(null);

  // const [enterpriseId, setEnterpriseId] = useState<string | null>(null);
  // const [enterpriseErrors, setEnterpriseErrors] = useState<string | null>(null);
  // const [fileErrors, setFileErrors] = useState<string | null>(null);

  // const errorsMap = {
  //   enterprise: setEnterpriseErrors,
  //   fileItem: setFileErrors,
  // };
  // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const id: string = event.target.value;
  //   setEnterpriseId(id);
  // };

  const [updateEnterprise] = useMutation(UPDATE_ENTERPRISE);

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   Object.values(errorsMap).forEach((setError) => setError(null));
  //
  //   const file = fileItem.current?.files?.[0];
  //
  //   const errors = validateForm(enterpriseId, file);
  //   if (errors.length > 0) {
  //     errors.forEach(({ input, message }) => {
  //       errorsMap[input as keyof typeof errorsMap](message);
  //     });
  //     return;
  //   }

  // handleVacanciesFile(file, enterpriseId, updateEnterprise);
  // };

  return (
    <>
      <form className={'w-75'}>
        <div className={'form-group row'}>
          <div className={'col-4'}>
            <Link
              to={'/edit/createNews'}
              className='btn bg-warning px-5 text-black fw-bold'
            >
              Создать новость
            </Link>
          </div>
        </div>
        <hr />
      </form>

      <div className={`w-75 ${styles.editPage_tableContainer}`}>
        <table className={'table text-primary border-primary'}>
          <thead>
            <tr>
              <th scope={'col'}>#</th>
              <th scope={'col'}>Заголовок</th>
              <th scope={'col'}>Дата публикации</th>
              <th scope={'col'}></th>
            </tr>
          </thead>

          <tbody className={'overflow-auto'}>
            {_.fill(Array(20), 2).map((_, index) => (
              <tr key={index}>
                <td scope={'row'}>{index + 1}</td>
                <td>Новость {index} 1234432112345555666677788</td>
                <td>
                  {index.toString().length === 1 ? `0${index}` : index}
                  .01.2022
                </td>
                <td>
                  <Link
                    to={`/edit/editNews/${index + 1}`}
                    className='btn btn-sm bg-white text-black fw-bold me-2'
                  >
                    Редактировать
                  </Link>
                  <button
                    type='button'
                    className='btn btn-sm bg-warning text-black fw-bold'
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
// {blockContent === 'createNews' && (
//   <>
//     <h3 className={'w-75 mb-4'}>Создание новости</h3>
//     <form onSubmit={onSubmit} className={'w-75'}>
//       <div className={'form-group row mb-2'}>
//         <label className='col-3 col-form-label'>Дата публикации:</label>
//         <div className={'col-3'}>
//           <input type={'date'} className={'form-control'} />
//         </div>
//       </div>
//
//       <div className={'form-group row mb-2'}>
//         <label htmlFor={'newsTitle'} className='col-3 col-form-label'>
//           Заголовок новости:
//         </label>
//         <div className={'col-9'}>
//           <input
//             id={'newsTitle'}
//             className={'form-control'}
//             placeholder={'Напишите текст здесь...'}
//           />
//         </div>
//       </div>
//
//       <div className={'form-group row mb-2'}>
//         <label htmlFor='newsBody' className='col-3 col-form-label'>
//           Текст новости:
//         </label>
//         <div className={'col-9'}>
//               <textarea
//                 id={'newsBody'}
//                 rows={5}
//                 placeholder={'Напишите текст здесь...'}
//                 className={'form-control'}
//               />
//         </div>
//       </div>
//
//       <div className={'form-group row mb-4'}>
//         <label htmlFor='photoFiles' className='col-3 col-form-label'>
//           Фотографии:
//         </label>
//         <div className={'col-4'}>
//           <input
//             className='form-control'
//             type='file'
//             ref={fileItem}
//             multiple={true}
//           />
//         </div>
//         <div className={'col-4 ms-3 mt-1'}>
//           jpg или png, не менее 1920*1080px
//         </div>
//       </div>
//
//       <div className={'form-group row mb-2'}>
//         <button
//           type={'submit'}
//           className={'btn btn-lg form-control bg-warning fw-bold'}
//         >
//           Опубликовать
//         </button>
//       </div>
//       <div className={'d-flex justify-content-center'}>
//         <button
//           type={'button'}
//           className={
//             'btn bg-none text-primary border-0 shadow-none mx-auto'
//           }
//           onClick={() => setBlockContent('news')}
//         >
//           Отмена
//         </button>
//       </div>
//     </form>
//   </>
// )}

export default News;
