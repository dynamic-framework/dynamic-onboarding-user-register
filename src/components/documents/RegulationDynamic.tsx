/* eslint-disable max-len */
import { useCallback } from 'react';
import { DAlert, DButton } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { SCREENS } from '../../config/widgetConfig';
import useWidgetUtils from '../../hooks/useWidgetUtils';
import useSignDocuments from '../../hooks/useSignDocuments';

export default function RegulationDynamic() {
  const { navigateTo } = useWidgetUtils();
  const { signDocument } = useSignDocuments();
  const { t } = useTranslation();

  const handleAccept = useCallback(() => {
    signDocument('regulation');
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
      <p className="small text-gray-500 mb-6 mb-md-2">{t('document.count', { current: 2, total: 2 })}</p>
      <h5 className="mb-6 mb-md-4">{t('document.regulationTitle')}</h5>
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
        <p>
          El documento denominado Términos y Condiciones Generales de Uso de una determinada página o sitio web es aquel que contiene las normas que regulan la interacción de las personas que acceden a ella (usuarias) con el contenido que la misma página pone a disposición, con los productos y/o servicios ofrecidos en ella, y con las personas responsables del sitio.
        </p>
        <p>
          Los Términos y Condiciones de Uso constituyen un documento que se ha vuelto cada vez más habitual y necesario para cualquier persona que sea propietaria de un Sitio Web, o bien que utilice algún servicio o host proporcionado por un proveedor (como las plataformas de blogging, microblogging y algunas redes sociales).
        </p>
        <p>
          PRIMERO: El documento denominado Términos y Condiciones Generales de Uso de una determinada página o sitio web es aquel que contiene las normas que regulan la interacción de las personas que acceden a ella (usuarias) con el contenido que la misma página pone a disposición, con los productos y/o servicios ofrecidos en ella, y con las personas responsables del sitio.
        </p>
        <p>
          Los Términos y Condiciones de Uso constituyen un documento que se ha vuelto cada vez más habitual y necesario para cualquier persona que sea propietaria de un Sitio Web, o bien que utilice algún servicio o host proporcionado por un proveedor (como las plataformas de blogging, microblogging y algunas redes sociales).
        </p>
        <p>
          Aunque en Chile no existe una regulación extensiva en la materia, este documento se ha elaborado teniendo en consideración la incipiente legislación aplicable y las recomendaciones realizadas por organismos públicos y no gubernamentales.
        </p>
        <p>
          Es por lo anterior que este modelo de Términos y Condiciones contiene una lista extensa de menciones que se consideran importantes para el correcto funcionamiento de todo sitio web, generando la confianza que incentive en los usuarios la interacción con la página y con los productos y servicios ofrecidos en ella.
        </p>
        <p>
          En relación a los sitios Web que entregan servicios o productos para que las persona usuarias puedan comprar o contratar deben respetar la normativa aplicable a las páginas de internet, así como entregar un acceso a la información claro y conciso, velando por la seguridad de las transacciones y el manejo de los datos personales, especialmente aquellos relacionados con información bancaria o financiera..
        </p>
        <p>
          SEGUNDO: El documento denominado Términos y Condiciones Generales de Uso de una determinada página o sitio web es aquel que contiene las normas que regulan la interacción de las personas que acceden a ella (usuarias) con el contenido que la misma página pone a disposición, con los productos y/o servicios ofrecidos en ella, y con las personas responsables del sitio.
        </p>
        <p>
          Los Términos y Condiciones de Uso constituyen un documento que se ha vuelto cada vez más habitual y necesario para cualquier persona que sea propietaria de un Sitio Web, o bien que utilice algún servicio o host proporcionado por un proveedor (como las plataformas de blogging, microblogging y algunas redes sociales).
        </p>
        <p>
          Aunque en Chile no existe una regulación extensiva en la materia, este documento se ha elaborado teniendo en consideración la incipiente legislación aplicable y las recomendaciones realizadas por organismos públicos y no gubernamentales.
        </p>
        <p>
          Es por lo anterior que este modelo de Términos y Condiciones contiene una lista extensa de menciones que se consideran importantes para el correcto funcionamiento de todo sitio web, generando la confianza que incentive en los usuarios la interacción con la página y con los productos y servicios ofrecidos en ella.
        </p>
        <p>
          En relación a los sitios Web que entregan servicios o productos para que las persona usuarias puedan comprar o contratar deben respetar la normativa aplicable a las páginas de internet, así como entregar un acceso a la información claro y conciso, velando por la seguridad de las transacciones y el manejo de los datos personales, especialmente aquellos relacionados con información bancaria o financiera.
        </p>
        <p>
          TERCERO: El documento denominado Términos y Condiciones Generales de Uso de una determinada página o sitio web es aquel que contiene las normas que regulan la interacción de las personas que acceden a ella (usuarias) con el contenido que la misma página pone a disposición, con los productos y/o servicios ofrecidos en ella, y con las personas responsables del sitio.
        </p>
        <p>
          Los Términos y Condiciones de Uso constituyen un documento que se ha vuelto cada vez más habitual y necesario para cualquier persona que sea propietaria de un Sitio Web, o bien que utilice algún servicio o host proporcionado por un proveedor (como las plataformas de blogging, microblogging y algunas redes sociales).
        </p>
        <p>
          Aunque en Chile no existe una regulación extensiva en la materia, este documento se ha elaborado teniendo en consideración la incipiente legislación aplicable y las recomendaciones realizadas por organismos públicos y no gubernamentales.
        </p>
        <p>
          Es por lo anterior que este modelo de Términos y Condiciones contiene una lista extensa de menciones que se consideran importantes para el correcto funcionamiento de todo sitio web, generando la confianza que incentive en los usuarios la interacción con la página y con los productos y servicios ofrecidos en ella.
        </p>
        <p>
          En relación a los sitios Web que entregan servicios o productos para que las persona usuarias puedan comprar o contratar deben respetar la normativa aplicable a las páginas de internet, así como entregar un acceso a la información claro y conciso, velando por la seguridad de las transacciones y el manejo de los datos personales, especialmente aquellos relacionados con información bancaria o financiera.
        </p>

      </section>
      <DButton
        text={t('actions.understand')}
        onClick={handleAccept}
      />
    </div>
  );
}
