import Header from '@/component/layout/Header';
import ContentArea from '@/component/ui/ContentArea/ContentArea';
import SearchForm from '@/component/feature/SearchForm/SearchForm';
import MainForm from '@/component/layout/MainForm/MainForm';



export default function Home() {
  return (
    <>
      <Header />
      <ContentArea>
        <SearchForm />
        <MainForm />
      </ContentArea>
    </>
  );
}
