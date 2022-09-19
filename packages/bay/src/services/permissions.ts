/**
 * 权限控制
 */
import { BayStatus } from '@/BayModel';
import { getInject } from '@wakeadmin/framework';

export type PermissionCheckType = 'AND' | 'OR';

/**
 * 检查是否有权限
 *
 * @param to 权限标识符，在当前激活上下文中查找
 * @param type 检查的类型, 支持 AND 或 OR，在传递多个权限标识符时有用，AND 表示必须拥有全部权限，OR 表示拥有其中一个即可
 */
export async function allows(to: string[], type: PermissionCheckType = 'OR') {
  const bayModel = getInject('DI.bay.BayModel');

  await bayModel.waitSetup();

  const check = (id: string) => {
    return !!bayModel.menu?.findByIdentifierUnderActiveContext(id)?.result;
  };

  if (type === 'AND') {
    return to.every(check);
  } else {
    return to.some(check);
  }
}

/**
 * 检查是否有权限(同步)
 *
 * @remarks
 * 如果bayModel没有初始化完毕的话
 * 那么默认返回`false`
 *
 * @param to 权限标识符，在当前激活上下文中查找
 * @param type 检查的类型, 支持 AND 或 OR，在传递多个权限标识符时有用，AND 表示必须拥有全部权限，OR 表示拥有其中一个即可
 */
export function allowsSync(to: string[], type: PermissionCheckType = 'OR') {
  const bayModel = getInject('DI.bay.BayModel');
  if (bayModel.status !== BayStatus.READY) {
    return false;
  }

  const check = (id: string) => {
    return !!bayModel.menu?.findByIdentifierUnderActiveContext(id)?.result;
  };

  if (type === 'AND') {
    return to.every(check);
  } else {
    return to.some(check);
  }
}
