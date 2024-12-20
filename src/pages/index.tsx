import Header from '@/component/layout/Header/Header';
import ContentArea from '@/component/ui/ContentArea/ContentArea';
import SearchForm from '@/component/feature/SearchForm/SearchForm';
import MainTodos from '@/component/layout/MainTodos/MainTodos';
import { Suspense } from 'react';


export default function Home() {
  return (
    <>
      <Header />
      <ContentArea>
        <SearchForm />
        <Suspense fallback={<div>...loading</div>}>
          <MainTodos />
        </Suspense>
      </ContentArea>
    </>
  );
}
