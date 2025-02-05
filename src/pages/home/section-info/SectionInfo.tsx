import { CardInfo } from '@components/card';
import { Button } from '@components/form';
import { Desc } from '@components/text';
import { InfoMenu, OpeningInfoOpt } from '@globals/info';
import { useMediaMobile } from '@hooks/useMedia';
import { getT } from '@i18n/index';
import { MenuOption } from '@models/app';

import styles from './style.module.less';

const CardInfoTime = () => {
  const t = getT();
  return (
    <CardInfo
      title={t(`info.${OpeningInfoOpt.id}.title`)}
      icon={OpeningInfoOpt.icon as string}
      gradient={true}
    >
      <div className={styles.infoBody}>
        <Desc
          title={t('info.opening.titleTime')}
          content={t('info.opening.descTime')}
        />
        <Desc
          title={t('info.opening.titleAddress')}
          content={t('info.opening.descAddress')}
        />
      </div>
    </CardInfo>
  );
};

const CardInfoEle = ({ id, icon, path }: MenuOption) => {
  const t = getT();
  return (
    <CardInfo
      title={t(`info.${id}.title`)}
      icon={icon as string}
      actions={
        <div className={styles.actionsCont}>
          <Button onClick={() => console.log(path)}>
            {t(`info.${id}.btn`)}
          </Button>
        </div>
      }
    >
      {t(`info.${id}.desc`)}
    </CardInfo>
  );
};

const SectionInfoMobile = () => {
  return (
    <ul className={styles.galMobile}>
      {InfoMenu.map((s) => <li key={s.id}>
        <CardInfoEle
          id={s.id}
          icon={s.icon}
          path={s.path}
        />
      </li>)}
      <li>
        <CardInfoTime />
      </li>
    </ul>
  );
};

const SectionInfoWeb = () => {
  return (
    <ul className={styles.galWeb}>
      <li>
        <CardInfoTime />
      </li>
      {InfoMenu.map((s) => <li key={s.id}>
        <CardInfoEle
          id={s.id}
          icon={s.icon}
          path={s.path}
        />
      </li>)}
    </ul>
  );
};

const SectionInfo = () => {
  const isMobile = useMediaMobile();
  return (
    <div className={styles.cont}>
      {isMobile
        ? <SectionInfoMobile />
        : <SectionInfoWeb />}
    </div>
  );
};

export default SectionInfo;
