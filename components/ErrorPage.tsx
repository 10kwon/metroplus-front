import * as React from 'react'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = 'Error'

  return (
    <>
      <PageHead title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>페이지를 가져오는 중 오류가 발생했어요</h1>

          {statusCode && <p>오류 코드: {statusCode}</p>}

        </main>
      </div>
    </>
  )
}
