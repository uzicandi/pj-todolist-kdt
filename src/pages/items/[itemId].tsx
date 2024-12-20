import Header from '@/component/layout/Header/Header';
import MainDetail from '@/component/layout/MainDetail/MainDetail';
import ContentArea from '@/component/ui/ContentArea/ContentArea';
import { useRouter } from 'next/router';

export default function Page() {
  const { query: { itemId } } = useRouter();

  const todoId = Number(itemId);

  if (!todoId) return;

  return (
    <>
      <Header />
      <ContentArea>
        <MainDetail itemId={todoId} />
      </ContentArea>
    </>
  )
}