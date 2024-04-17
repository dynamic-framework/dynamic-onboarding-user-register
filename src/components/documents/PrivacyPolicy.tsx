/* eslint-disable max-len */
import { useCallback } from 'react';
import { DAlert, DButton } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import useWidgetUtils from '../../hooks/useWidgetUtils';
import { SCREENS } from '../../config/widgetConfig';
import useSignDocuments from '../../hooks/useSignDocuments';

export default function PrivacyPolicy() {
  const { navigateTo } = useWidgetUtils();
  const { signDocument } = useSignDocuments();
  const { t } = useTranslation();

  const handleAccept = useCallback(() => {
    signDocument('privacy');
    navigateTo(SCREENS.documentSign);
  }, [navigateTo, signDocument]);

  return (
    <div>
      <DButton
        className="mb-4 back-document"
        variant="link"
        theme="secondary"
        text={t('actions.back')}
        iconStart="arrow-left"
        onClick={() => navigateTo(SCREENS.documentSign)}
      />
      <p className="small text-gray-500 mb-6 mb-md-2">{t('document.count', { current: 1, total: 2 })}</p>
      <h5 className="mb-6 mb-md-4">{t('document.privacyTitle')}</h5>
      <DAlert
        type="info"
        soft
        className="small mb-6 mb-md-4"
      >
        <p className="fw-bold mb-3">
          {t('document.alert.title')}
        </p>
        <p className="mb-0">
          {t('document.alert.subtitle')}
        </p>
      </DAlert>
      <section className="text-gray-500 mb-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi enim eligendi nostrum quidem necessitatibus est velit vitae eaque libero natus dolorum distinctio vero, hic laboriosam tempora repellendus quasi nam explicabo doloremque. Modi, nisi. Harum quaerat dolorum impedit! Consequatur ab temporibus corporis nobis, incidunt optio, animi</p>
        <p>labore, harum aliquam a nihil? Sapiente eaque sed expedita quae sint perspiciatis placeat libero ex odio velit rerum pariatur cumque enim fugit nemo, id atque aliquid dignissimos laboriosam nam voluptates earum eveniet accusantium obcaecati? Quae, provident excepturi! Porro, neque hic dolor dicta consequuntur reiciendis nesciunt, atque, at odio co</p>
        <p>rporis omnis. Nostrum similique vel necessitatibus possimus fugit minima vero iusto nobis reprehenderit. Eaque quia maxime enim voluptates debitis cum dignissimos fugiat iure? Unde modi eum perspiciatis distinctio saepe ullam mollitia quia cupiditate. Eos iusto ipsa, similique, magnam tenetur voluptates, deleniti unde inventore hic doloribus aperia</p>
        <p>impedit odio? Aut recusandae laboriosam, quia modi laudantium fugit commodi deserunt nihil sapiente corporis mollitia quisquam culpa cum, architecto deleniti quos similique rem. Harum cupiditate natus voluptates! Hic veritatis modi neque eum fugiat aperiam dolor eligendi quis incidunt dolore deserunt alias nostrum, dolorum aut repudiandae cumque </p>
        <p>autem temporibus quibusdam! Dignissimos molestiae qui, asperiores, labore ut iure eum harum error consectetur dolor nemo assumenda accusamus, aperiam ex quis. Voluptates nemo est quibusdam obcaecati eum tenetur doloribus, neque ex consequatur sequi non deleniti soluta consequuntur a adipisci, quas magni natus voluptatem! Soluta nostrum esse facere!</p>
        <p>Obcaecati rem temporibus porro sed magnam! Laboriosam doloremque libero enim quibusdam officiis. Quas dolorem quisquam quam odio? Officiis aliquid omnis voluptate. Aperiam, obcaecati. Sit tenetur commodi perspiciatis beatae veritatis placeat repellat cum rem adipisci libero! Eligendi molestiae eaque adipisci inventore nihil placeat voluptatibus re</p>
        <p>repellendus tempora nostrum atque cumque expedita excepturi repellat officiis ipsam reiciendis natus asperiores, accusantium dolorum! Vero similique unde dolorum. Assumenda necessitatibus dolorem aut voluptatum, quod maiores at maxime tempore inventore reiciendis ad magni? Quas, cum? Voluptate commodi voluptas fuga numquam deserunt sunt, esse dol</p>
        <p>orum vero, ea ratione deleniti magni. Aspernatur odit ducimus iure nihil temporibus eveniet adipisci fugit quaerat quibusdam accusamus similique sapiente, et quisquam fuga quae optio praesentium reprehenderit! Minus architecto nulla quisquam culpa laborum ullam distinctio, ut, facere soluta eligendi ratione saepe quaerat cum maiores deleniti expedi</p>
        <p>suscipit quod maxime ipsa veritatis minima! Sint laboriosam suscipit labore cum id, aliquam aliquid dolores, nesciunt magni natus in obcaecati modi excepturi. Voluptatibus dolores non fuga neque ducimus. Excepturi nihil autem, dignissimos consectetur voluptatibus magnam, eveniet obcaecati perferendis molestiae nulla quasi ipsa placeat mollitia e</p>
        <p>natus magni, sequi hic odio commodi quaerat officia quia dolor omnis odit? Praesentium magnam quam hic ea odio dolorum tempore quos in nulla non, soluta totam aliquid nihil perferendis doloribus similique corrupti expedita ipsa quae veritatis exercitationem? Illo voluptatibus eos quia non natus, similique rerum aliquid cumque nostrum, consectetur</p>
        <p>laudantium saepe mollitia delectus facilis est harum reprehenderit nemo animi unde provident ullam facere, reiciendis dicta? Culpa accusantium obcaecati earum dolor, fugiat incidunt officiis perferendis enim sunt cumque mollitia, error ipsum veritatis magnam soluta illum provident magni quaerat repellendus? Ratione nisi ad illo autem numquam harum</p>
        <p>quos placeat reprehenderit deserunt, adipisci reiciendis, eligendi sed ducimus error. Pariatur exercitationem ipsam soluta eligendi ullam at in quos, sint totam ducimus placeat ea ipsa qui itaque repudiandae illo, magnam error molestiae iste deleniti natus. Possimus aliquam ab quae mollitia fugit magnam sapiente doloremque dolorem consectetur eli</p>
        <p>Fugit ab laboriosam laudantium natus! Ipsum sed quo maiores odit ab sint praesentium, quisquam exercitationem culpa? Eaque incidunt, eos et ratione dignissimos ullam cupiditate ad deleniti sit molestias repellendus soluta sint veritatis sapiente. Eum, maxime. Modi error consectetur adipisci porro, necessitatibus ex repudiandae ab sit unde mo</p>
        <p>Nulla tenetur mollitia expedita unde ratione quia. Doloremque tenetur ipsa quasi obcaecati ut fuga porro repellendus eligendi, sequi ea, saepe suscipit iure. Molestias, impedit quam commodi aliquam excepturi expedita at facilis, laboriosam voluptatem repudiandae aspernatur delectus quos! Totam quia enim voluptates, nemo ipsum, quod ipsam q</p>
        <p>saepe quisquam accusamus mollitia laboriosam fugiat consectetur quos ducimus soluta assumenda voluptatum consequuntur eveniet nam sapiente earum obcaecati? Cum tenetur accusantium iure quos, blanditiis distinctio porro, eius libero in officia fugiat facilis a? Excepturi ipsa omnis nulla soluta et natus, numquam incidunt quasi corrupti ipsam, od</p>
        <p>it eum eaque modi possimus? Vel aperiam eum porro sit natus ratione dolores commodi enim quaerat, numquam cum voluptatem quo, cupiditate provident voluptatibus officiis veniam! Modi repellendus facere eos saepe, dignissimos nesciunt numquam voluptatem accusamus quidem quo pariatur atque nobis nostrum quas voluptatum voluptatibus ab tempora a, quis </p>
      </section>
      <DButton
        text={t('actions.understand')}
        onClick={handleAccept}
      />
    </div>
  );
}
